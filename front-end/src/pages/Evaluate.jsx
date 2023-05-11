import React, { useState } from "react";
import { RatingStarsComp } from "../components/RatingStarsComp";

export const Evaluate = () => {
  const [rate, setRate] = useState(0);
  const handleClick = (num) => {
    setRate(num);
  };
  return (
    <div className="w-screen h-[auto]">
      <div className="w-screen h-[90px] border-1px border-[1px] border-[gray] flex items-center justify-center">
        <div className="w-[510px] h-[42px] flex">
          <img className="w-[60px] h-[42px]" src="" alt="logo" />
          <div>
            <p className="w-auto h-[20px]">Name</p>
            <p className="w-auto h-[22px]">Link</p>
          </div>
        </div>
      </div>
      <div className="w-screen h-auto flex items-center justify-center bg-[#FCFBF3]">
        <div className="w-[510px] h-[auto] m-[16px] p-[24px] flex flex-col bg-[white] border-[1px] border-[gray] rounded-[10px]">
          <p>Rate your recent experience</p>
          <RatingStarsComp scale={2} handleClick={handleClick} />
          <p>Tell us more about your experience</p>
          <input className="w-[460px] h-[188px]" type="text" />
          <p>Date of experience</p>
          <input type="text" placeholder="dd/mm/year" />
          <p>Give your review a title</p>
          <input type="text" placeholder="title" />
        </div>
      </div>
    </div>
  );
};
