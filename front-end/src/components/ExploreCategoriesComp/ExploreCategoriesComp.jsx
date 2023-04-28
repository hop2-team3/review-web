/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import dugood from "../../assets/dugood.png";
import fivestar from "../../assets/fivestar.svg";
import world from "../../assets/world.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";

export const ExploreCategoriesComp = () => {
  return (
    <>
      <button className="h-[169px] w-[830px] rounded-[8px] bg-[#FFFFFF]">
        <div className=" flex flex-row h-[98px] pl-4 ">
          <img className="h-[72px] w-[72px]" src={dugood}></img>
          <div className="flex flex-col h-[87px] pl-6 place-content-evenly ">
            <p className="h-[20px] w-[151px] font-[800] text-[15px]">
              DuGood Credit Union
            </p>
            <div className="flex flex-row">
              <img src={fivestar} className="h-[20px] w-[106px] "></img>
              <p className=" color-[#696A6A] font-[400] text-[13px]">
                TrustScore 5.0
              </p>
            </div>

            <p className="h-[20px] text-[#696A6A] font-[400] text-[14px] w-[170px]">
              Beaumont, United States
            </p>
          </div>
        </div>

        <div className=" w-[830px] border-b-2"></div>
        <div className="flex h-[12px] pt-4">
          <div className="flex flex-row w-[167px] place-content-evenly ">
            <img className="h-[16px] w-[16px]" src={world}></img>
            <img className="h-[16px] w-[16px]" src={mail}></img>
            <img className="h-[16px] w-[16px]" src={phone}></img>
            <div className="border-l-2 h-[16px]"></div>
            <p className="h-[15px] w-[28px] font-[400] text-[12px]">Bank</p>
          </div>
        </div>
      </button>
    </>
  );
};
