import React from "react";
import { RatingStarsComp } from "../RatingStarsComp/RatingStarsComp";

export const ReviewCarouselComp = (props) => {
  const colors = ["#AFD3E2", "#19A7CE", "#146C94", "#F6F1F1"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className="w-[360px] h-auto p-[25px] bg-[white] rounded-[8px] flex flex-col gap-[8px] hover:shadow-[3px_3px_2px_0px_gray] hover:scale-[1.01] p-[8px]  ">
      <div className="flex items-center gap-[8px]">
        <div
          style={{ backgroundColor: color }}
          className="w-[40px] h-[40px] rounded-full flex justify-center items-center capitalize text-[24px]"
        >
          {props.name.charAt(0)}
        </div>
        <RatingStarsComp rate={props.rate} />
      </div>
      <div>
        <span className="text-bold">{props.name}</span>
        <span className="text-[#696A6A]"> reviewed </span>
        <span className="text-bold">{props.company}</span>
      </div>
      <p className="break-words hyphens-auto">"{props.review}"</p>
    </div>
  );
};
