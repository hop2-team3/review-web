import React from "react";
import googleLogo from "../assets/googleLogo.png";

export const BusinessSignUp = () => {
  return (
    <div className="h-screen w-screen bg-forest-green flex flex-row justify-center items-center gap-10 sm:flex flex-wrap">
      <div className="w-[556px]">
        <div className="text-[#04DA8D] text-[40px] font-bold font-inter">
          Create your free Trustpilot account
        </div>
        <div className=" text-[#04DA8D] text-[32px] font-bold font-inter ">
          Start collecting reviews today
        </div>
      </div>
      <div className="h-[930px] flex flex-col items-center p-5 w-[520px] bg-[white] rounded-3xl space-y-5 p-[48px]  ">
        <div className="w-full">
          <div className="w-[325px] h-[36px] text-[30px] font-inter font-bold  mt-[48px]">
            Create a free account
          </div>
        </div>

        <div className="flex flex-row">
          <img className="w-[42px]" src={googleLogo} alt="googleLogo" />
          <button className="rounded-sm font-inter-medium text-[color:white] w-[380px] h-[44px] bg-deep-blue">
            Sign up with google
          </button>
        </div>
        <div className="flex flex-row items-center">
          <div className="border w-[180px] border-light-gray mr-5"></div>
          <div className="font-inter text-sm">OR</div>
          <div className="border w-[180px] border-light-gray ml-5"></div>
        </div>
        <div className="w-full">
          <div className="font-inter font-bold h-[20px] w-[160px]">
            Sign up with email
          </div>
        </div>

        <ul className="space-y-5">
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px] w-[422px] pl-3"
              placeholder="Website"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px] w-[422px]"
              placeholder="Company name"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px] w-[422px]"
              placeholder="First name"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px] w-[422px]"
              placeholder="Last name"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px] w-[422px]"
              placeholder="Job title"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px] w-[422px]"
              placeholder="Work email"
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px] w-[422px]"
              placeholder="Phone number"
              type="tel"
            ></input>
          </li>
        </ul>
        <button className=" rounded-sm font-inter-medium text-[color:white] w-[422px] h-[44px] bg-deep-blue ">
          Create free account
        </button>
      </div>
    </div>
  );
};
