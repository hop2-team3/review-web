import React, { useRef, useState } from "react";
import googleLogo from "../assets/googleLogo.png";
import axios from "axios";

export const CustomerSignUp = () => {
  const URL = "http://localhost:8000/customers/signup";
  const firstname = useRef("");
  const lastname = useRef("");
  const email = useRef("");
  const password = useRef("");
  const passwordr = useRef("");

  const [passwordBg, setPasswordBg] = useState("border-gray");

  const click = () => {
    if (
      firstname.current.value !== "" &&
      lastname.current.value !== "" &&
      email.current.value !== "" &&
      password.current.value !== "" &&
      passwordr.current.value !== ""
    ) {
      if (password.current.value === passwordr.current.value) {
        axios
          .post(URL, {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
            password: password.current.value,
          })
          .then(function (res) {
            console.log(res);
            // alert("Signed up successfully.");
            window.location.replace("/CustomerLogin");
          })
          .catch(function (error) {
            console.log(error);
            alert(error.response.data.message);
          });
      } else {
        setPasswordBg("[red]");
      }
    }
  };

  return (
    <div className="h-full w-screen bg-forest-green flex flex-row justify-center items-center gap-10 sm:flex flex-wrap sm:h-screen">
      <div className="w-[556px] flex flex-col justify-center items-center">
        <div className="text-[#04DA8D] text-[32px] font-bold font-inter w-[326px] sm:text-[40px] sm:w-[556px]">
          Create your free Trustpilot account
        </div>
        <div className=" text-[#04DA8D] text-[24px] font-bold font-inter w-[326px] sm:text-[32px] sm:w-[556px]">
          Start writing reviews today
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center p-[16px] bg-[white] rounded-3xl space-y-5  h-[886px] w-[326px] sm:h-[910px] sm:w-[520px] sm:p-[48px]">
        <div className="sm:w-full">
          <div className="w-[197px] h-[78px] text-[30px] font-inter font-bold   sm:w-[325px] sm:h-[36px]">
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

        <div className="flex  sm:h-1/4 md:h-3/5 flex-col justify-around">
          <ul className="space-y-5 flex flex-col justify-center items-center">
            <li>
              <input
                className="border border-border-gray rounded-sm h-[44px] w-[262px] sm:w-[422px] pl-2"
                placeholder="First name"
                ref={firstname}
              ></input>
            </li>
            <li>
              <input
                className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
                placeholder="Last name"
                ref={lastname}
              ></input>
            </li>
            <li>
              <input
                className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
                placeholder="Email"
                ref={email}
              ></input>
            </li>
            <li>
              <input
                className={`border border-${passwordBg} rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2`}
                placeholder="Password"
                type="Password"
                ref={password}
              ></input>
            </li>
            <li>
              <input
                className={`border border-${passwordBg} rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2`}
                placeholder="Repeat password"
                ref={passwordr}
                type="Password"
              ></input>
            </li>
          </ul>
          <button
            className=" rounded-sm font-inter-medium text-[color:white] mt-5 md:mt-0   w-[262px] sm:w-[422px] h-[44px] bg-deep-blue "
            onClick={click}
          >
            Create free account
          </button>
        </div>
      </div>
    </div>
  );
};
