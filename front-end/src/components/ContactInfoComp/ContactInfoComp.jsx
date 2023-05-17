import React from "react";
import { useState } from "react";
import world from "../assets/world.svg";
import mail from "../assets/mail.svg";
// import phone from "../assets/phone.svg";

export const ContactInfoComp = () => {
  // const [isshown, setIsshown] = useState(false);
  // const handleClick = (event) => {
  //   // setIsshown((current = !current));
  // };
  return (
    <>
      <div className="h-[150px] w-[320px] bg-[white] rounded-[8px] flex flex-wrap place-content-evenly cursor-pointer">
        <p>Contact</p>
        <div className="border-b w-[315px]"></div>
        <button className="flex flex-wrap">
          <img src={world} className="h-[15px] w-[15px] "></img>
        </button>

        <div className="border-b w-[315px]"></div>
        <button className="flex flex-row">
          <img src={mail} className="h-[15px] w-[15px]"></img>
        </button>
      </div>
    </>
  );
};
