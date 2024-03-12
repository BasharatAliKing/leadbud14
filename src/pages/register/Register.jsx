import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signupUser,
  signupSelector,
  clearState,
} from "../../features/auth/signupSlice";
import googleIcon from "../../assets/images/google.png";
import registerImg from "../../assets/images/sign-up-image.png";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdRemoveRedEye } from "react-icons/md";
import passwordIcon from "../../assets/images/password-icon.png";
import * as yup from "yup";
import Loader from "../../components/Loader";




// password regex

const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;


// register form schema, validations

const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required*"),
  email: yup.string().email().required("Email is required*"),
  phoneNumber: yup.string().required("Phone Number is required*"),
  password: yup
    .string()
    .min(8)
    .max(15)
    .matches(
      passwordRegex,
      "Password should contain at least one capital letter, one small letter, at least a number, a special character, and a minimum length of 8"
    )
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation is required"),
  agreement: yup.boolean().required("Please accept the terms and conditions"),
});

const Register = () => {

  

  const [apiErrorMessage, setApiErrorMessage] = useState("");


  // show and hide password / password-confirmation

  const [showPassword, setshowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setshowPassword(!showPassword);
  };

  const togglePasswordConfirmVisibility = (e) => {
    e.preventDefault();
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };


  // actions

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(signupSelector);
  console.log();

  // form submit logic

  const onSubmit = (data) => {
    dispatch(
      signupUser({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: data.password,
        confirm_password: data.confirm_password,
        agreement: data.agreement,
      })
    );
    console.log("register data", data);
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      navigate("/login");
    }

    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (isError) {
      setApiErrorMessage("Email address already taken.");
      dispatch(clearState());
    }
  }, [isError]);

  return (
    <div className="register">
      <div className="container mx-auto">
        <div className="flex">
        {isFetching && (
                <div className="flex">
                  <Loader title="We are creating your account . . ."/>
                
                </div>
              )}
          <div className="login-signup-area">
       
            <div className="content text-center">
              <h1 className="text-dark-blue text-md sm:text-[30px] md:text-[35px] font-poppins font-bold">
                Sign Up
              </h1>
              <p className="text-[16px] md:text-sm text-dark-blue">
                Sign up and grow your business
                <br />
                with Leadbud.io
              </p>
              <button className="border-2 text-[16px] md:text-[20px] border-dark-blue text-dark-blue font-medium flex justify-center items-center py-1 md:py-2.5 px-5 rounded-xl w-[100%] my-5 hover:bg-dark-blue hover:text-[#fff] transition">
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
                    type="text"
                    placeholder="Name*"
                    className={`form-control outline-none focus:outline-none ${errors.name? 'error-border' : ''}`}
                    {...register("name")}
                    error={errors.name ? errors.name.message : ""}
                  />
                  {errors.name && (
                    <span className="flex text-[12px] text-left text-[#dc2626]">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="col-span-6">
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className={`form-control outline-none focus:outline-none ${errors.email ? 'error-border' : ''}`}
                    {...register("email")}
                    error={errors.email ? errors.email.message : ""}
                  />
                  {errors.email && (
                    <span className="flex text-[12px] text-left text-[#dc2626]">
                      {errors.email.message}
                    </span>
                  )}
                  
                  
                  {apiErrorMessage  && (
                  <span className="flex text-[12px] text-left text-[#dc2626]">
                    {apiErrorMessage}
                  </span>
                  )}
                 
                </div>

                <div className="col-span-6">
                  <Controller
                    control={control}
                    name="phoneNumber"
              
                    rules={{ required: true }}
                    render={({ field: { ref, ...field } }) => (
                      <PhoneInput
                      className={` ${errors.phoneNumber ? 'error-border rounded-xl' : ''}`}
                        {...field}
                        inputExtraProps={{
                          ref,
                          required: true,
                          autoFocus: true,
                
                        }}
                        country="us"
                        countryCodeEditable={true}
                      />
                    )}
                  />
                  {errors.phoneNumber && (
                    <span className="flex text-[12px] text-left text-[#dc2626] mt-2">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>

                <div className="col-span-12 ">
                  <div className="flex relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password*"
                      className={`form-control outline-none focus:outline-none ${errors.password ? 'error-border' : ''}`}
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

                <div className="col-span-12 ">
                  <div className="flex relative">
                    <input
                      type={showPasswordConfirmation ? "text" : "password"}
                      placeholder="Confirm Password*"
                      name="password_confirmation"
                      className={`form-control outline-none focus:outline-none ${errors.confirm_password ? 'error-border' : ''}`}
                      {...register("confirm_password")}
                      error={
                        errors.confirm_password
                          ? errors.confirm_password.message
                          : ""
                      }
                    />

                    <button
                      className="absolute right-4 top-[12px] md:top-[18px]"
                      onClick={togglePasswordConfirmVisibility}
                    >
                      {showPasswordConfirmation ? (
                        <MdRemoveRedEye
                          size={30}
                          className="text-[#C1C1C1] w-[30px] h-[22px]"
                        />
                      ) : (
                        <img src={passwordIcon} alt="icon" />
                      )}
                    </button>
                  </div>

                  {errors.confirm_password && (
                    <span className="flex text-[12px] text-left text-[#dc2626]">
                      {errors.confirm_password.message}
                    </span>
                  )}
                </div>
                <div className="col-span-12 send-leads flex items-center">
                  <div className="round">
                    <input
                      {...register("agreement")}
                      error={errors.agreement ? errors.agreement.message : ""}
                      type="checkbox"
                      name="agreement"
                      id="checkbox"
                      className="h-4 w-4 md:h-8 md:w-8 cursor-pointer rounded-full border-red-300 bg-[#fff] text-[#C1C1C1] focus:ring-green"
                    />
                    {errors.agreement && (
                      <span className="flex text-[12px] md:text-[18px] text-left text-[#dc2626]">
                        {errors.agreement.message}
                      </span>
                    )}
                  </div>
                  <span className="text-mygray text-[16px] md:text-[18px]">
                    Send me Lead updates via email
                  </span>
                </div>
                <div className="col-span-12">
                  <button className="border-2 text-[16px] md:text-[22px] bg-dark-blue border-dark-blue text-[#fff] font-medium flex justify-center items-center py-2 md:py-3 px-5 rounded-xl w-[100%] my-5 hover:bg-[#fff] hover:text-dark-blue transition">
                    Sign Up With Email
                  </button>
                </div>
              </form>
              <p className="text-mygray text-[16px] md:text-[18px]mt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-dark-blue">
                  Login
                </Link>{" "}

                <Link to="/dashboard" className="text-dark-blue">
                  Dashboard
                </Link>{" "}

              </p>
            </div>
          </div>
          <div className="bg-with-image">
            <div className="image-area">
              <img src={registerImg} alt="register" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
