/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useContext } from "react";
import { CategoryComp } from "../components/CategoryComp/CategoryComp";
import { ReviewCarouselComp } from "../components/ReviewCarouselComp/ReviewCarouselComp";
import background from "../assets/background.jpg";
import { RatingStarsComp } from "../components/RatingStarsComp";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Context } from "../components/DataContext";

export const Home = () => {
  const commentsURL = "http://localhost:8000/comments/";
  const companiesURL = "http://localhost:8000/companies/";
  const { reviews, setReviews, companies, setCompanies } = useContext(Context);

  useEffect(() => {
    axios
      .get(commentsURL)
      .then(function (res) {
        setReviews(res.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });

    axios
      .get(companiesURL)
      .then(function (res) {
        setCompanies(res.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    return () => {};
  }, []);

  const categories = [];
  companies?.map((el) => {
    categories.push(el.category);
  });
  let uniqueCats = [...new Set(categories)];

  return (
    <div>
      <div className="flex flex-col w-screen h-[auto] relative md-flex overflow-hidden">
        <div
          className=" h-[440px] w-screen flex justify-center items-center flex-row bg-cover md-flex "
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className=" h-[212px] w-[900px] font-[800px] text-[40px] leading-[52px] md-flex">
            <p className="  text-[#146C94] leading-[52px] ">
              Read reviews. Write reviews.
            </p>
            <p className="  text-[#146C94] leading-[52px] mt-[20px] ">
              Find companies you can trust.
            </p>
            <div className="w-[660px] h-[64px] flex flex-row relative mt-[40px] md-flex">
              <input className="w-full h-full rounded-[32px] "></input>
              <button className="h-[50px] w-[162px] bg-[#AFD3E2] rounded-[9999px] absolute right-[10px] top-[7px] text-center text-white text-[15px] font-[700]">
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
            <div className="mt-[2vw] flex flex-wrap h-[283px] w-[1255px] pt-[10px] place-content-evenly md-flex ">
              {/* 2xl:h-[283px] overflow-x-auto */}
              <CategoryComp categoryName={"restaurants"} />
              <CategoryComp categoryName={"Coffee shop"} />
              <CategoryComp categoryName={"Jewelry store"} />
              <CategoryComp categoryName={"Cosmetic store"} />
              <CategoryComp categoryName={"bank"} />
              <CategoryComp categoryName={"Sport store"} />
              <CategoryComp categoryName={"Shoe store"} />
              <CategoryComp categoryName={"Men's clothing"} />
              <CategoryComp categoryName={"Women's clothing"} />
              <CategoryComp categoryName={"Electronic store"} />
              <CategoryComp categoryName={"cinema"} />
              <CategoryComp categoryName={"Car dealer"} />
            </div>
            <div className=" flex flex-wrap  h-[283px] w-[1255px] md-flex md-[32px] pt-[10px] place-content-evenly md-flex">
              {uniqueCats?.map((el, index) => {
                return <CategoryComp categoryName={el} key={index} />;
              })}
            </div>
          </div>
        </div>

        <div className="h-[635px] w-[screen] flex flex-wrap place-content-evenly bg-[#FCFBF3] overflow-x-auto scroll-smooth md-flex">
          <div className="flex flex-row">
            <ReviewCarouselComp
              name={"Tugu"}
              company={"villiard"}
              review={"Yaanaaa"}
              rate={2}
            />
            <ReviewCarouselComp
              name={"Gegee"}
              company={"villiard"}
              review={"Yanziin goy delguur bna. Dahin zaaval uilchluuneee.  "}
              rate={2}
            />
            <ReviewCarouselComp
              name={"Selenge"}
              company={"villiard"}
              review={
                "Orchin saitai, dotor tohijilt saitai, ajilchidiin hariltsaa handlaga sain, goy uilchilgeeni gazar baina."
              }
              rate={3}
            />
            <ReviewCarouselComp
              name={"Tsolmon"}
              company={"Mr Lin"}
              review={
                "Ariun tsevriin tal deer anhaarah shaardlagatai !!!, busad talaar haritsangui gaigui, mun orchin sian tohitoi tuhtai gazar baina"
              }
              rate={3}
            />
            <ReviewCarouselComp
              name={"Tergel"}
              company={"Yuna"}
              review={
                "Orchin saitai, dotor tohijilt saitai, ajilchidiin hariltsaa handlaga sain, goy uilchilgeeni gazar baina"
              }
              rate={5}
            />
            <ReviewCarouselComp
              name={"Sanaa"}
              company={"Khaan"}
              review={
                "Uilchilgeeneii gazar baij arai udaan uilchilsen, gehdee hariltsaa handlaga iin tal deer haritsangui sain"
              }
              rate={3}
            />
            <ReviewCarouselComp
              name={"Ujee"}
              company={" Time Billiard"}
              review={
                "10 jiliin suragchdiig oroin tsagaar oruulahgui baigaa ni mash buruu, busdaar dajgui gazarshuu"
              }
              rate={3}
            />
            <ReviewCarouselComp
              name={"Khulanaaaa"}
              company={"Sunny"}
              review={
                "Hariltsaani soyol baihgui, Shiruun haritsdag, Ajilchid ni mash buruu setgelgeetei"
              }
              rate={1}
            />
          </div>
          <div className="flex flex-row">
            <ReviewCarouselComp
              name={"Tsetse"}
              company={"villiard"}
              review={"dajgui gazar bainaaa dahin uilchluuleh bolnoo"}
              rate={5}
            />
            <ReviewCarouselComp
              name={"Balbar"}
              company={"Ulemj Salon"}
              review={
                "Baingiin uilchluugch shuu, uneheer goy gazar , dahin dahin uilchluuleed baimaar. Tsaashdaa ch uilchluulseer baih bolnoo"
              }
              rate={5}
            />
            <ReviewCarouselComp
              name={"Ujee"}
              company={" Time Billiard"}
              review={
                "10 jiliin suragchdiig oroin tsagaar oruulahgui baigaa ni mash buruu, busdaar dajgui gazarshuu"
              }
              rate={3}
            />
            <ReviewCarouselComp
              name={"Khulanaaaa"}
              company={"Sunny"}
              review={
                "Hariltsaani soyol baihgui, Shiruun haritsdag, Ajilchid ni mash buruu setgelgeetei"
              }
              rate={1}
            />
            <ReviewCarouselComp
              name={"Anand"}
              company={"Dreamy drinks"}
              review={
                "Umnuh umnuhuu bodvol amt chanar mash muudsan baina. Mash udaan huleelgedeg bolson. Tsagaasaa ert haaj oroitoj ongoidog geh met"
              }
              rate={2}
            />
            <ReviewCarouselComp
              name={"Nomio"}
              company={" Time hospital"}
              review={
                "emch nar ni hariltsaa handlagiin tal deer anhaarval zohistoi"
              }
              rate={3}
            />
            <ReviewCarouselComp
              name={"Khulanaaaa"}
              company={"Sunnyside cafe"}
              review={
                "Hariltsaani soyol baihgui, Shiruun haritsdag, Ajilchid ni mash buruu setgelgeetei"
              }
              rate={1}
            />
          </div>
        </div>
        <div className=" flex items-center justify-center w-[screen] h-[516px] bg-[#AFD3E2] md-flex">
          <div className="flex flex-row items-center justify-center w-[1120px] h-[516px] md-flex ">
            <div className=" flex flex-col justify-evenly w-[496px] h-[363px] md-flex">
              <p className="h-[53px] w-[175px] text-[#FCFBF3] font-[840] text-[40px] ">
                Be heard
              </p>
              <p className="h-[68px] w-[397px] text-[#FCFBF3] leading-7 ">
                Views is a review platform that’s open to everyone. Share your
                experiences to help others make better choices and encourage
                companies to up their game.
              </p>
              <button className="h-[56px] w-[165px] rounded-[9999px] border border-[#FCFBF3] text-[#FCFBF3] bg-[#AFD3E2]">
                What we do
              </button>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};
