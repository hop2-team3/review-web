/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { CategoryComp } from "../components/CategoryComp/CategoryComp";
// import { Link } from "react-router-dom";
import { ReviewCarouselComp } from "../components/ReviewCarouselComp/ReviewCarouselComp";
import { RatingStarsComp } from "../components/RatingStarsComp";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col w-[screen] h-[auto] relative md-flex">
        <div className=" h-[440px] w-screen flex justify-center items-center flex-row bg-[black] md-flex ">
          <div className=" h-[212px] w-[900px] font-[800px] text-[40px] leading-[52px] md-flex">
            <p className="  text-white leading-[52px] text-[#FFFFFF]">
              Read reviews. Write reviews.
            </p>
            <p className="  text-white leading-[52px] mt-[20px] text-[#FFFFFF]">
              Find companies you can trust.
            </p>
            <div className="w-[660px] h-[64px] flex flex-row relative mt-[40px] md-flex">
              <input className="w-full h-full rounded-[32px] "></input>
              <button className="h-[50px] w-[162px] bg-[#205CD4] rounded-[9999px] absolute right-[10px] top-[7px] text-center text-white text-[15px] font-[700]">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center place-content-around  w-screen h-[410px] bg-[#F1F1E8] md-flex">
          <div className=" h-[343px] w-[1200px]">
            <div className="h-[40px] w-[1200px] flex justify-between text-center flex-row">
              <p className=" w-[320px] h-[32px] flex text-[24px]">
                Explore categories{" "}
              </p>
            </div>
            <div className=" flex flex-wrap  h-[283px] w-[1255px] md-flex md-[32px] pt-[10px] place-content-evenly md-flex">
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"Jewelry store"} />
              <CategoryComp categoryName={"restaurants"} />
              <CategoryComp categoryName={"Coffee shop"} />
              <CategoryComp categoryName={"Cosmetic store"} />
              <CategoryComp categoryName={"Sport store"} />
              <CategoryComp categoryName={"Shoe store"} />
              <CategoryComp categoryName={"Men's clothing"} />
              <CategoryComp categoryName={"Women's clothing"} />
              {/* <CategoryComp categoryName={"clothing store"} />
              <CategoryComp categoryName={"clothing store"} />
              <CategoryComp categoryName={"clothing store"} /> */}
            </div>
          </div>
        </div>

        <div className="h-[635px] w-[screen] flex flex-wrap s place-content-evenly bg-[#FCFBF3] scroll-smooth md-flex">
          <ReviewCarouselComp
            name={"tugu"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={2}
          />
          <ReviewCarouselComp
            name={"gege"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={2}
          />
          <ReviewCarouselComp
            name={"lolo"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={3}
          />
          <ReviewCarouselComp
            name={"aanaaa"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={4}
          />
          <ReviewCarouselComp
            name={"hihe"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={2}
          />
          <ReviewCarouselComp
            name={"sanaa"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={2}
          />
          <ReviewCarouselComp
            name={"ujee"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={2}
          />
          <ReviewCarouselComp
            name={"khulanaaaa"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={2}
          />
          <ReviewCarouselComp
            name={"tsts"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={2}
          />
          <ReviewCarouselComp
            name={"aaaa"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={2}
          />
          <ReviewCarouselComp
            name={"tugu"}
            company={"villiard"}
            review={
              "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
            }
            rate={2}
          />
        </div>

        <div className=" flex items-center justify-center w-[screen] h-[516px] bg-[#022A1C] md-flex">
          <div className="flex flex-row items-center justify-center w-[1120px] h-[516px] md-flex ">
            <div className=" flex flex-col justify-evenly w-[496px] h-[363px] md-flex">
              <p className="h-[53px] w-[175px] text-[#FCFBF3] font-[840] text-[40px] ">
                Be heard
              </p>
              <p className="h-[68px] w-[397px] text-[#FCFBF3] leading-7 ">
                Trustpilot is a review platform that’s open to everyone. Share
                your experiences to help others make better choices and
                encourage companies to up their game.
              </p>
              <button className="h-[56px] w-[165px] rounded-[9999px] border border-[#FCFBF3] text-[#FCFBF3] bg-[#022A1C]">
                What we do
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
