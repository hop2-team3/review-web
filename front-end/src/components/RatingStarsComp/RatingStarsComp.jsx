import React, { useState } from "react";
import DefaultStar from "../../assets/DefaultStar.jpg";
import Star from "../../assets/Star.png";

export const RatingStarsComp = (props) => {
  const [rate, setRate] = useState(0);
  const [mouseClick, setMouseClick] = useState(-1);
  const defaultRate = [0, 0, 0, 0, 0];
  const givenRate = defaultRate.fill(1, 0, props.rate);
  let color;
  switch (props.rate) {
    case 1:
      color = "#FF3722";
      break;
    case 2:
      color = "#ff8622";
      break;
    case 3:
      color = "#ffce00";
      break;
    case 4:
      color = "#73cf11";
      break;
    case 5:
      color = "#00b67a";
      break;
  }
  return (
    <div>
      <div className="w-[108px] h-[20px] flex gap-[2px]">
        {defaultRate.map((el, index) => {
          return (
            <img
              className="w-[20px] h-[20px]"
              src={DefaultStar}
              key={index}
              onClick={() => {
                setMouseClick(index);
                setRate(index + 1);
              }}
              onMouseOver={() => {
                if (mouseClick == -1) {
                  setRate(index + 1);
                } else {
                  if (mouseClick == index) {
                    setRate(index + 1);
                  }
                }
              }}
              alt=""
            />
          );
        })}
      </div>
      <div className="w-[108px] h-[20px] flex gap-[2px] mt-[-20px]">
        {givenRate.map((el, index) => {
          if (el % 2 == 1) {
            return (
              <div
                style={{ backgroundColor: color }}
                className="w-[20px] h-[20px] flex justify-center items-center"
                key={index}
                onClick={() => {
                  setMouseClick(index);
                  setRate(index + 1);
                }}
                onMouseOver={() => {
                  if (mouseClick == -1) {
                    setRate(index + 1);
                  } else {
                    if (mouseClick == index) {
                      setRate(index + 1);
                    }
                  }
                }}
              >
                <img className="w-[14px] h-[13.25px]" src={Star} alt="" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
