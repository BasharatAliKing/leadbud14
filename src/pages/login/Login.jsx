import React, { useState, useEffect } from "react";
import loginImage from "../../assets/images/login.png";
import googleIcon from "../../assets/images/google.png";
import { Link } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import passwordIcon from "../../assets/images/password-icon.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  loginSelector,
  clearState,
} from "../../features/auth/loginSlice";
import { data } from "autoprefixer";
import Loader from "../../components/Loader";

// Schema For Form

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required*"),
  password: yup.string().required("Password is requried*"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // React-hook-form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  // actions

  const { isFetching, isSuccess, isError } = useSelector(loginSelector);

  const errorMessage = useSelector((state) => state.login.errorMessage);

  // show and hide password

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // Submit The Form

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      navigate("/dashboard");
    }
    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

  return (
    <div className="register">
      <div className="container mx-auto">
        <div className="flex">
          {isFetching && (
            <div className="flex">
              <Loader />
            </div>
          )}

          <div className="login-signup-area login">
            <div className="content text-center">
              <h1 className="text-dark-blue text-md sm:text-[30px] md:text-[35px] font-poppins font-bold">
                Login
              </h1>
              <p className="text-[16px] md:text-sm text-dark-blue">
                Login and grow your business
                <br />
                with Leadbud.io
              </p>

              <button className="border-2 text-[16px] md:text-[20px] border-dark-blue text-dark-blue font-medium flex justify-center items-center py-2.5 px-5 rounded-xl w-[100%] my-5 hover:bg-dark-blue hover:text-[#fff] transition">
                <img src={googleIcon} alt="google" className="mr-5" /> Sign Up
                with Google
              </button>

              <p className="my-6 text-mygray text-[16px] md:text-[20px]">OR</p>

              <form
                className="grid grid-cols-12 grid-flow-row-dense gap-3"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col-span-12">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address*"
                    className={`form-control outline-none focus:outline-none ${
                      errors.email ? "error-border" : ""
                    }`}
                    {...register("email")}
                    error={errors.email ? errors.email.message : ""}
                  />

                  {errors.email && (
                    <span className="flex text-[12px] text-left text-[#dc2626]">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12">
                  <div className="flex relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password*"
                      className={`form-control outline-none focus:outline-none ${
                        errors.password ? "error-border" : ""
                      }`}
                      {...register("password")}
                      error={errors.password ? errors.password.message : ""}
                    />

                    <button
                      className="absolute right-4 top-[12px] md:top-[18px]"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <MdRemoveRedEye
                          size={30}
                          className="text-[#C1C1C1] w-[30px] h-[22px]"
                        />
                      ) : (
                        <img src={passwordIcon} alt="icon" />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <span className="flex text-[12px] text-left text-[#dc2626]">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12 send-leads flex items-center">
                  <div className="round">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="h-4 w-4 md:h-8 md:w-8 cursor-pointer rounded-full border-red-300 bg-[#fff] text-[#C1C1C1] focus:ring-green"
                    />
                  </div>
                  <span className="text-mygray text-[12px] md:text-[18px]">Remember Me</span>
                </div>

                <div className="col-span-12">
                  <button className="border-2 bg-dark-blue border-dark-blue text-[#fff] font-medium flex justify-center items-center py-3 px-5 rounded-xl w-[100%] my-5 hover:bg-[#fff] hover:text-dark-blue transition">
                    Login
                  </button>
                </div>
              </form>

              {isError ? (
                <div className="bg-red py-3 px-5 text-[#fff] text-xs rounded-xl">
                  {errorMessage}
                </div>
              ) : (
                ""
              )}

              <p className="text-mygray text-[16px] md:text-[18px] mt-3">
                Don't have an account?{" "}
                <Link to="/" className="text-dark-blue">
                  Signup
                </Link>{" "}
              </p>
            </div>
          </div>

          <div className="bg-with-image">
            <div className="image-area">
              <img src={loginImage} alt="login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
