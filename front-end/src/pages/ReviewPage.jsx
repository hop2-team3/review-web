import React from "react";
import Header from "../components/Header";
import Review from "../assets/review.png";
import star from "../assets/od.svg";
import ver from "../assets/ver.svg";
import vis from "../assets/vis.svg";
import pro from "../assets/pro.svg";
import { RatingStarsComp } from "../components/RatingStarsComp";
export function ReviewPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center ">
        <div className=" md:w-[1024px] h-[200px] flex items-center flex-row  justify-evenly w-[100vw]  md:scale-75 lg:scale-100 ">
          <img
            className="w-[149px] w-[149px] scale-75  sm:scale-100"
            src={Review}
          />
          <div className="flex flex-col h-[149px] w-[349px] justify-between]">
            <h1 className="inter text-[18px] font-black sm:text-[32px]">
              DuGood Credit Union
            </h1>
            <h1 className="inter text-[18px]  font-normal sm:text-[#696A6A] text-base">
              Reviews 2,938 • Excellent
            </h1>
            <div className="h-[50px] w-[220px] flex flex-row justify-between">
              <img
                className="h-[40px] w-[40px] scale-75 sm:scale-100"
                src={star}
              />
              <img
                className="h-[40px] w-[40px] scale-75 sm:scale-100"
                src={star}
              />
              <img
                className="h-[40px] w-[40px] scale-75 sm:scale-100"
                src={star}
              />
              <img
                className="h-[40px] w-[40px] scale-75 sm:scale-100"
                src={star}
              />
              <img
                className="h-[40px] w-[40px] scale-75 sm:scale-100"
                src={star}
              />
            </div>
            <img
              className="w-[133px] h-[22px] scale-80 sm:scale-100"
              src={ver}
            />
          </div>
          <div>
            <button className="h-[70px] w-[350px] border-[#1B69D9] flex items-center justify-center flex-col rounded border-[1px]  md:flex hidden ">
              <h1 className="text-[#1B69D9] inter font-bold ">
                www.dugood.org
              </h1>
              <h1 className="text-[#696A6A] inter font-normal">
                Visit this website
              </h1>
            </button>
          </div>
        </div>
        <div className=" w-screen h-screen border-t-solid border-[1px] border-[#E5E5DD] bg-[#fcfbf3]">
          <div className="flex flex-row w-[160px] h-[60px]  justify-evenly  items-center sm:hidden flex">
            <img src={vis} className="h-[16px] w-[16px]" />
            <h1 className="text-[#1B69D9] inter font-normal">
              {" "}
              www.dugood.org
            </h1>
          </div>
          <div className="w-screen h-screen flex flex-col items-center ">
            <div className="h-[90px] w-[680px] bg-white border-[#E5E5DD] border-[1px] flex items-center border-solid rounded-md justify-around">
              <img className="h-[40px] w-[40px]" src={pro} />
              <input
                placeholder="Write a review"
                className="border-none h-[40px] w-[350px] border-0"
              />
              <div className="flex flex-row w-[213px] h-[40px] justify-between items-center ">
                <RatingStarsComp scale={2} />
              </div>
            </div>
            <div className="h-[355px] w-[680px] bg-white border-[#E5E5DD] border-[1px] flex border-solid rounded-md">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReviewPage;
