import React, { useContext, useState, useEffect } from "react";
import Review from "../assets/review.png";
import star from "../assets/od.svg";
import ver from "../assets/ver.svg";
import vis from "../assets/vis.svg";
import pro from "../assets/pro.svg";
import logo from "../assets/iogo.svg";
import { RatingStarsComp } from "../components/RatingStarsComp";
import { ReviewComp } from "../components/ReviewComp";
import { Link, useParams } from "react-router-dom";
import { Context } from "../components/DataContext";
import axios from "axios";

export const ReviewPage = () => {
  const param = useParams();
  const { reviews, setReviews, companies, setCompanies } = useContext(Context);
  const [data, setData] = useState();
  let company;
  if (companies) {
    company = companies.find((el) => el.companyName == param.id);
  }
  const commentsURL = `http://localhost:8000/comments/${company._id}`;

  useEffect(() => {
    axios
      .get(commentsURL)
      .then(function (res) {
        setData(res.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    return () => {};
  }, []);

  return (
    <>
      <div className="flex flex-col items-center ">
        <div className=" md:w-[1024px] h-[200px] flex items-center flex-row  justify-evenly w-[100vw]  md:scale-75 lg:scale-100 ">
          <img
            className="w-[149px] w-[149px] scale-75  sm:scale-100"
            src={Review}
          />
          <div className="flex flex-col h-[149px] w-[349px] justify-between]">
            <h1 className="inter text-[18px] font-black sm:text-[32px]">
              {company.companyName}
            </h1>
            <h1 className="inter text-[18px]  font-normal sm:text-[#696A6A] text-base">
              Reviews {company.reviews} • {company.rating}
            </h1>
            <RatingStarsComp rate={company.rating} />
            {/* <img
              className="w-[133px] h-[22px] scale-80 sm:scale-100 mt-[10px]"
              src={ver}
            /> */}
          </div>
          <div>
            <button className="h-[70px] w-[350px] border-[#1B69D9] flex items-center justify-center flex-col rounded border-[1px]  md:flex hidden ">
              <h1 className="text-[#1B69D9] inter font-bold ">
                {company.link}
              </h1>
              <h1 className="text-[#696A6A] inter font-normal">
                Visit this website
              </h1>
            </button>
          </div>
        </div>
        <div className=" w-screen h-auto min-h-[800px] border-t-solid border-[1px] border-[#E5E5DD] bg-[#F6F1F1]">
          <div className="flex flex-row w-[160px] h-[60px]  justify-evenly  items-center sm:hidden flex">
            <img src={vis} className="h-[16px] w-[16px]" />
            <h1 className="text-[#1B69D9] inter font-normal">
              {" "}
              {company.link}
            </h1>
          </div>
          <div className="w-screen h-auto flex flex-col gap-[10px] items-center mt-[10px]">
            <div className="h-[90px] px-[20px] bg-[white] border-[#E5E5DD] border-[1px] flex items-center border-solid rounded-md justify-between  w-[90%] sm:w-[680px]">
              <div className="flex items-center gap-[10px]">
                <img className="h-[40px] w-[40px]" src={pro} />
                <Link
                  className="text-[#146C94] cursor-pointer hover:underline"
                  to={`/evaluate/${company._id}`}
                >
                  Write a review
                </Link>
              </div>
              <RatingStarsComp scale={2} rate={-1} />
            </div>
            <div className="h-[255px] bg-[white] border-[#E5E5DD] border-[1px] flex flex-col border-solid justify-evenly rounded-md  w-[90%] sm:w-[680px]">
              <div className="flex flex-row h-[28px] w-[189px] items-center justify-evenly ">
                <h1 className="text-[23px] inter font-bold">Reviews</h1>
                <img src={logo} className="h-[25px] h-[25px]" />
                <h1 className="text-[23px] inter font-bold">4.9</h1>
              </div>
              <h1 className="font-extralight inter flex justify-evenly w-[95px]">
                2,933 total
              </h1>

              <div className=" flex flex-row items-center  h-[30px] w-[98%] pl-[5px]">
                <input className="min-h-[24px] min-w-[24px]" type="checkbox" />
                <h1 className="scale-100 min-w-[50px] ml-[5px] sm:">5-star</h1>
                <div className="w-[500px] h-[12px] bg-[#F6F1F1] rounded-full">
                  <div className="w-[93%] h-[12px] bg-[black] rounded-full"></div>
                </div>
                <h1 className="inter font-light">93%</h1>
              </div>
              <div className=" flex flex-row items-center  w-[98%] pl-[5px]">
                <input className="min-h-[24px] min-w-[24px]" type="checkbox" />
                <h1 className="scale-100 min-w-[50px] ml-[5px]">4-star</h1>
                <div className="w-[500px] h-[12px] bg-[#F6F1F1] rounded-full">
                  <div className="w-[5%] h-[12px] bg-[black] rounded-full"></div>
                </div>
                <h1 className="inter font-light">5%</h1>
              </div>
              <div className=" flex flex-row items-center  w-[98%] pl-[5px]">
                <input className="min-h-[24px] min-w-[24px]" type="checkbox" />
                <h1 className="scale-100 min-w-[50px] ml-[5px] ">3-star</h1>
                <div className="w-[500px] h-[12px] bg-[#F6F1F1] rounded-full">
                  <div className="w-[1%] h-[12px] bg-[black] rounded-full"></div>
                </div>
                <h1 className="inter font-light">1%</h1>
              </div>
              <div className=" flex flex-row items-center  w-[98%] pl-[5px]">
                <input className="min-h-[24px] min-w-[24px]" type="checkbox" />
                <h1 className="scale-100 min-w-[50px] ml-[5px]">2-star</h1>
                <div className="w-[500px] h-[12px] bg-[#F6F1F1] rounded-full">
                  <div className="w-[1%] h-[12px] bg-[black] rounded-full"></div>
                </div>
                <h1 className="inter font-light">1%</h1>
              </div>
              <div className=" flex flex-row items-center  w-[98%] pl-[5px]">
                <input className="min-h-[24px] min-w-[24px]" type="checkbox" />
                <h1 className="scale-100 min-w-[50px] ml-[5px]">1-star</h1>
                <div className="w-[500px] h-[12px] bg-[#F6F1F1] rounded-full">
                  <div className="w-[1%] h-[12px] bg-[black] rounded-full"></div>
                </div>
                <h1 className="inter font-light">1%</h1>
              </div>
            </div>
            {data
              ? data.map((el, index) => {
                  return (
                    <ReviewComp
                      name={el.firstname}
                      title={el.title}
                      review={el.comment}
                      date={el.dateOfExperience}
                      key={index}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};
