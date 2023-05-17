import { useState } from "react";
import React from "react";
import googleBtn from "../assets/googleBtn.png";

export const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div>
      <div className="bg-[#FCFBF3] w-screen h-screen flex justify-center items-start sm:items-center ">
        <div className="bg-[#FFFFFF] w-[390px] h-[500px] sm:w-[560px] h-[530px] flex items-center justify-around flex-col border rounded-2xl border-[#E5E5DD] mt-[56px] sm:mt-0">
          <div className="w-[358px] text-xl font-bold font-inter  flex items-start sm:w-[530px] sm:text-2xl">
            Log in to Trustpilot Business
          </div>
          <input
            value={email}
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Work Email"
            className="w-[358px] h-[44px] border rounded border-[#696A6A] p-4 sm:w-[510px]"
          ></input>
          <input
            type={passwordType}
            onChange={handlePasswordChange}
            value={passwordInput}
            name="password"
            placeholder="Password"
            className="w-[358px] h-[44px] border rounded border-[#696A6A] p-4 sm:w-[510px]"
          />
          <div className="flex justify-between w-[358px] sm:w-[510px]">
            <a href="" className="text-sm sm:text-base">
              Forgot your password
            </a>
            <button
              className="text-[#205CD4] hover:underline underline-offset-2 text-sm sm:text-base"
              onClick={togglePassword}
            >
              {passwordType === "password" ? (
                <div>Show password</div>
              ) : (
                <div>Hide password</div>
              )}
            </button>
          </div>
          <button
            onClick={() => {
              console.log("clicked");
            }}
            disabled={!email || !passwordInput}
            className={`w-[358px] h-[48px] ${
              !email || !passwordInput
                ? "bg-[#1c1c1c30] text-[#696A6A]"
                : "bg-[#205cd4] text-[#FFFFFF] hover:bg-[#D8E4FA] hover:text-[#000000]"
            } rounded-full font-inter font-bold sm:w-[500px]`}
          >
            Log in
          </button>
          <div className="w-[358px] flex flex-row items-center justify-between sm:w-[510px]">
            <div className="border h-0  w-[146px] border-[#A3A3A3] sm:w-[180px]"></div>
            <div className="font-inter text-[#696A6A] text-base font-[400px]">
              OR
            </div>
            <div className="border w-[146px] h-0 border-[#A3A3A3] sm:w-[180px]"></div>
          </div>
          <button className="bg-[#D8E4FA] flex flex-row w-[358px] h-[48px]  rounded-full items-center justify-center font-inter font-bold text-[#205CD4] hover:text-[#000000] hover:bg-[#c1d7ff] sm:w-[510px]">
            <img className="m-[8px] w-[18px] h-[18px] " src={googleBtn} />
            Log in with Google
          </button>
          <div className=" w-[358px] sm:w-[510px] flex justify-start ">
            <div className="flex justify-between text-sm w-[358px] sm:w-[400px] sm:text-base ">
              <div>Don't have a Trustpilot account?</div>
              <a
                className="text-[#205CD4] hover:underline underline-offset-2 "
                href=""
              >
                Sign up for free now.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
