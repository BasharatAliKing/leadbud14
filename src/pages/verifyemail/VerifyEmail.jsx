import React from "react";
import googleIcon from "../../assets/images/google.png";
import registerImg from "../../assets/images/sign-up-image.png";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div className="register">
      <div className="container mx-auto">
        <div className="flex">
          <div className="login-signup-area verify-email">
            <div className="round-container">
              <img src={registerImg} />
            </div>
            <div className="text-center w-full flex flex-col items-center ">
              <h1 className="text-dark-blue text-[22px] font-poppins font-bold lg:text-[35px] md:text-[24px] galaxy-fold:text-[20px] 2xl-min:text-[45px] mt-3">
                Confirm your email
              </h1>
              <p className="text-[16px] text-dark-blue mt-4 md:text-[18px] md:max-w-[100% md:max-w-[80%] lg:max-w-[100%] lg:text-[20px] galaxy-fold:text-[13px] 2xl-min:text-[28px]">
                To continue to your account, please confirm your email by
                clicking the link in the email we've just sent you.
              </p>
              <p className="text-mygray text-[14px] mt-[60px] lg:text-[18px] galaxy-fold:text-[12px]  2xl-min:text-[24px]">
                Already have an account?{" "}
                <Link to="/login" className="text-dark-blue font-medium">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
          <div className="bg-with-image">
            <div className="image-area">
              <img src={registerImg} alt="login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
