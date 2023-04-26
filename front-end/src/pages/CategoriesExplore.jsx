import React from "react";
import { ExploreCategoriesComp } from "../components/ExploreCategoriesComp";

export const CategoriesExplore = () => {
  return (
    <>
      <div className="w-[screen] flex flex-col">
        <div className="h-[231px] w-[screen] bg-[#FFFFFF] flex flex-col text-center justify-center">
          <p className="font-[900] text-[40px] text-[#1C1C1C]">
            Best events & Entertainment
          </p>
          <p className="font-[400] text-[15px] text-[#696A6A]">
            Compare the best companies in this category
          </p>
        </div>
        <div className="w-[screen] h-[1400px] bg-[#FCFBF3] flex justify-center items-center">
          <ExploreCategoriesComp />
        </div>
      </div>
    </>
  );
};
