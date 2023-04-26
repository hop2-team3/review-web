/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { CategoryComp } from "../components/CategoryComp";
// import { Link } from "react-router-dom";
import { ReviewCarouselComp } from "../components/ReviewCarouselComp";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col w-[screen] h-[auto] relative">
        <div className=" h-[440px] w-screen flex justify-center items-center flex-row bg-black ">
          <div className=" h-[212px] w-[900px] font-[800px] text-[40px] leading-[52px]">
            <p className="  text-white leading-[52px]">
              Read reviews. Write reviews.
            </p>
            <p className="  text-white leading-[52px] mt-[20px]">
              Find companies you can trust.
            </p>
            <div className="w-[660px] h-[64px] flex flex-row relative mt-[40px]">
              <input className="w-full h-full rounded-[32px] "></input>
              <button className="h-[50px] w-[162px] bg-[#205CD4] rounded-[9999px] absolute right-[10px] top-[7px] text-center text-white text-[15px] font-[700]">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center place-content-around  w-screen h-[410px] bg-[#F1F1E8]">
          <div className=" h-[343px] w-[1200px]">
            <div className="h-[40px] w-[1200px] flex justify-between text-center flex flex-row">
              <p className=" w-[320px] h-[32px] flex text-[24px]">
                Explore categories{" "}
              </p>
            </div>
            <div className=" flex flex-wrap h-[283px] w-[1200px] pt-[10px]">
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"bank"} />
            </div>
          </div>
        </div>

        <div className="h-[635px] w-[screen] flex flex-wrap s place-content-evenly bg-[#FCFBF3]">
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

        <div className=" flex items-center justify-center w-[screen] h-[516px] bg-[#022A1C]">
          <div className="flex flex-row items-center justify-center w-[1120px] h-[516px]  ">
            <div className=" flex flex-col justify-evenly w-[496px] h-[363px]">
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

            <div className="h-[496px] w-[496px]  items-center rounded-[16px] bg-[#04DA8D] flex flex-col justify-evenly">
              <p className="h-[208px] w-[269px] font-[900] text-[#1C1C1C] text-[40px]">
                Our 2022 Transparency Report has landed
              </p>
              <p className="h-[45px] w-[378px] font-[400] text-[15px]">
                We’re looking back on a year unlike any other. Read about how we
                ensure our platform’s integrity.
              </p>
              <button className="h-[56px] w-[161px] rounded-[9999px] bg-[#1C1C1C] text-[#FCFBF3]">
                Take a look
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
