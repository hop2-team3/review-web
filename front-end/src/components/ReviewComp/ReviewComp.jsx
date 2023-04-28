import React from "react";
import { RatingStarsComp } from "../RatingStarsComp";

export const ReviewComp = (props) => {
  const colors = ["blue", "green", "yellow", "cyan"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className="w-[680px] h-auto p-[25px] flex flex-col rounded-[8px] bg-[white] gap-[10px]">
      <div className="w-auto h-[44px] flex flex-row items-center gap-[8px]">
        <div
          style={{ backgroundColor: color }}
          className="w-[44px] h-[44px] rounded-full flex justify-center items-center capitalize text-[24px]"
        >
          {props.name.charAt(0)}
        </div>
        <p>{props.name}</p>
      </div>
      <hr className="border-[#E3E4E4]" />
      <div className="w-[630px] h-auto gap-[8px] flex flex-col">
        <div className="w-[630px] w-[20px] flex flex-row justify-between">
          <RatingStarsComp rate={3} />
          <div>21 hours ago</div>
        </div>
        <h1 className="font-bold capitalize">{props.title}</h1>
        <p className="text-[16px] break-words hyphens-auto">{props.review}</p>
        <div className="flex">
          <p className="font-bold">Date of experience:</p>
          <p>{props.date}</p>
        </div>
      </div>
      <hr className="border-[#E3E4E4]" />
      <div className="w-[630px] h-[32px] flex flex-row justify-between">
        <button>like</button>
        <button>save</button>
      </div>
    </div>
  );
};
