/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState } from "react";
import fivestar from "../../assets/fivestar.svg";
import world from "../../assets/world.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import { ContactInfoComp } from "../ContactInfoComp";
// import dugood from "../../assets/dugood.png";
// import { RatingStarsComp } from "./RatingStarsComp";

export const ExploreCategoriesComp = (props) => {
  const [isshown] = useState(false);
  const handleClick = (event) => {};

  return (
    <>
      <button className="h-[168px] w-[830px] rounded-[8px] bg-[#FFFFFF] mt-[25px] ">
        <div className=" flex flex-row h-[110px] pl-6 border-b border-[#696A6A] items-center ">
          <img className="h-[74px] w-[74px]" src={props.bg}></img>
          <div className="flex flex-col h-[77px] pl-6 place-content-evenly ">
            <p className="h-[20px] w-[123px] font-[700] text-[16px]">
              {props.CompanyName}
            </p>
            <div className="flex flex-row h-[20px]">
              <img src={fivestar} className="h-[20px] w-[106px] "></img>
              <p className=" color-[#696A6A] font-[400] text-[13px]">
                {props.TrustScore}
              </p>
            </div>

            <p className="h-[20px] text-[#696A6A] font-[400] text-[14px] w-[170px]">
              Beaumont, United States
            </p>
          </div>
        </div>

        <div className="flex h-[40px] pt-4">
          <button className="flex flex-row w-[167px] place-content-evenly cursor-pointer  ">
            <button
              onClick={handleClick}
              className="h-[16px] w-[16px] "
              style={{ backgroundImage: `url(${world}` }}
            ></button>
            <img
              className="h-[16px] w-[16px]"
              style={{ backgroundImage: `url(${mail})` }}
            ></img>
            <img
              className="h-[16px] w-[16px]"
              style={{ backgroundImage: `url(${phone})` }}
            ></img>
            <div className="border-l h-[16px]"></div>
            <p className="h-[15px] w-[28px] font-[400] text-[12px]">Bank</p>
          </button>

          {/* <button className=" h-[35px] color-[#205CD4] w-[133px] place-self-end">
            Latest reviews
          </button> */}
          {isshown && <ContactInfoComp />}
        </div>
      </button>
    </>
  );
};
