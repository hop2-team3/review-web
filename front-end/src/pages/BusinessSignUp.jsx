import React from "react";
import googleLogo from "../assets/googleLogo.png";

export const BusinessSignUp = () => {
  return (
    <div className="h-full w-screen bg-forest-green flex flex-row justify-center items-center gap-10 sm:flex flex-wrap sm:h-screen">
      <div className="w-[556px] flex flex-col justify-center items-center">
        <div className="text-[#04DA8D] text-[32px] font-bold font-inter w-[326px] sm:text-[40px] sm:w-[556px]">
          Create your free Trustpilot account
        </div>
        <div className=" text-[#04DA8D] text-[24px] font-bold font-inter w-[326px] sm:text-[32px] sm:w-[556px]">
          Start collecting reviews today
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center p-[16px] bg-[white] rounded-3xl space-y-5  h-[886px] w-[326px] sm:h-[910px] sm:w-[520px] sm:p-[48px]">
        <div className="sm:w-full -mt-10">
          <div className="w-[197px] h-[78px] text-[30px] font-inter font-bold sm:w-[325px] sm:h-[36px]">
            Create a free account
          </div>
        </div>

        <div className="flex flex-row">
          <a href="google.com">
            <img className="w-[42px]" src={googleLogo} alt="googleLogo" />
          </a>
          <button className="rounded-sm font-inter-medium text-[color:white] w-[220px] h-[44px] bg-deep-blue sm:w-[380px]">
            Sign up with google
          </button>
        </div>
        <div className="flex flex-row items-center">
          <div className="border w-[105px] border-light-gray mr-5 sm:w-[180px]"></div>
          <div className="font-inter font-bold text-sm">OR</div>
          <div className="border w-[105px] border-light-gray ml-5 sm:w-[180px]"></div>
        </div>
        <div className="w-full">
          <div className="font-inter font-bold h-[20px] ml-5 w-[160px] sm:m-0">
            Sign up with email
          </div>
        </div>

        <ul className="space-y-5 flex flex-col justify-center items-center">
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px] w-[262px] sm:w-[422px] pl-2"
              placeholder="Website"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="Company name"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="First name"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="Last name"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="Job title"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="Work email"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="Phone number"
              type="tel"
            ></input>
          </li>
        </ul>
        <button className=" rounded-sm font-inter-medium text-[color:white]  w-[262px] sm:w-[422px] h-[44px] bg-deep-blue ">
          Create free account
        </button>
      </div>
    </div>
  );
};
