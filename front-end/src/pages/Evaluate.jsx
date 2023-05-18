import React, { useState, useRef } from "react";
import { RatingStarsComp } from "../components/RatingStarsComp";

export const Evaluate = () => {
  const [rate, setRate] = useState(1);
  const handleClick = (num) => {
    setRate(num);
  };

  const [value, onChange] = useState(new Date());

  const comment = useRef("");
  const title = useRef("");

  let placeholderText;
  switch (rate) {
    case 1:
      placeholderText =
        "What went wrong this time? How can this company improve? Remember to be honest, helpful, and constructive!";
      break;
    case 2:
      placeholderText =
        "What went wrong this time? How can this company improve? Remember to be honest, helpful, and constructive!";
      break;
    case 3:
      placeholderText =
        "What did you like or dislike? What is this company doing well, or how can they improve? Remember to be honest, helpful, constructive!";
      break;
    case 4:
      placeholderText =
        "What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive!";
      break;
    case 5:
      placeholderText =
        "What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive!";
      break;
    default:
      break;
  }
  return (
    <div className="w-screen h-[auto] ">
      <div className="w-screen h-[90px] border-1px border-[1px] border-[#E5e5dd] flex items-center justify-center">
        <div className="w-[510px] h-[42px] flex">
          <img className="w-[60px] h-[42px]" src="" alt="logo" />
          <div>
            <p className="w-auto h-[20px]">Name</p>
            <p className="w-auto h-[22px]">Link</p>
          </div>
        </div>
      </div>
      <div className="w-screen h-auto sm:min-h-[800px] flex items-center justify-center bg-[#F6F1f1] font-bold text-[19px]">
        <div className=" h-[auto] sm:min-h-[600px] p-[24px] flex flex-col justify-start sm:justify-around gap-[5px] bg-[#F6F1F1] w-[90%] sm:w-[510px] sm:border-[1px] sm:border-[#E5e5dd] sm:bg-[white] rounded-[10px]">
          <div>
            <p>Rate your recent experience</p>
            <RatingStarsComp scale="2" handleClick={handleClick} />
          </div>
          <div>
            <p>Tell us more about your experience</p>
            <textarea
              className="w-[90%] sm:w-[460px] h-[188px] border-[1px] font-normal resize-none rounded-[8px] py-[8px] px-[16px] text-[16px]"
              placeholder={placeholderText}
              ref={comment}
            ></textarea>
          </div>
          <div>
            <p>Date of experience</p>
            <input
              className="w-[90%] sm:w-[460px] h-[44px] border-[1px] font-normal rounded-[4px] py-[10px] px-[16px]"
              type="text"
              placeholder="YY.MM.DD"
              onClick={console.log(value)}
            />
          </div>
          <div>
            <p>Give your review a title</p>
            <input
              className="w-[90%] sm:w-[460px] h-[44px] border-[1px] font-normal rounded-[4px] py-[10px] px-[16px]"
              type="text"
              placeholder="What's important for people to know?"
              ref={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
