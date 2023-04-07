/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { CategoryComp } from "../components/CategoryComp";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col w-[screen] h-[auto]">
        <div className=" h-[440px] w-screen flex justify-center items-center flex-row bg-black ">
          <div className=" h-[212px] w-[900px] font-[800px] text-[40px] leading-[52px]">
            <p className="  text-white leading-[52px]">
              Read reviews. Write reviews.
            </p>
            <p className="  text-white leading-[52px] mt-[20px]">
              Find companies you can trust.
            </p>
            <div className="w-[660px] h-[64px] flex flex-row">
              <input className="w-[660px] h-[64px] mt-[40px] rounded-[32px] "></input>
              {/* <button className="h-[48px] w-[162px] bg-[#205CD4] rounded-[9999px] ml-[490px]" > </button> */}
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center  w-screen h-[410px] bg-[#F1F1E8]">
          <div className=" h-[343px] w-[1200px]">
            <div className="h-[40px] w-[1200px] flex items-center justify-center flex flex-row">
              <p className=" w-[320px] h-[32px] flex justify-start text-[24px]">
                Explore{" "}
              </p>
              <button className="h-[40px] flex justify-end w-[100px] text-center rounded-[9999px] bg-[#D8E4FA]"></button>
            </div>

            <div className=" flex h-[283px] w-[1200px] pt-[10px]">
              <CategoryComp categoryName={"bank"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
