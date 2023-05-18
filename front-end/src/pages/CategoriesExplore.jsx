import React, { useEffect } from "react";
import { ExploreCategoriesComp } from "../components/ExploreCategoriesComp";
import { ContactInfoComp } from "../components/ContactInfoComp";
import { CategoryExploreRatingComp } from "../components/CategoryExploreRatingComp";
import { CompanyReviewedComp } from "../components/CompanyReviewedComp";
// import { RatingStarsComp } from "../components/RatingStarsComp";
import dugood from "../assets/dugood.png";
import southend from "../assets/SouthEnd.png";
import { useParams } from "react-router-dom";
import axios from "axios";

export const CategoriesExplore = (props) => {
  const { id } = useParams();
  const URL = "http://localhost:8000/companies";
  console.log(id);

  useEffect(() => {
    axios
      .post(URL, { category: id })
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    return () => {};
  }, []);

  return (
    <>
      <div className="w-[screen] flex flex-col md-flex">
        <div className="h-[231px] w-[screen] bg-[#FFFFFF] flex flex-col text-center justify-center">
          <p className="font-[900] text-[40px] text-[#1C1C1C]">Best in Bank</p>
          <p className="font-[400] text-[15px] text-[#696A6A]">
            Compare the best companies in this category
          </p>
        </div>

        <div className="w-[screen] h-[auto] bg-[#FCFBF3] flex flex-row items-center justify-center md-flex">
          <div className="flex flex-start">
            {/* <CategoryExploreRatingComp />{" "}
          </div>

          <div className="flex flex-col w-[880px] bg-[#FCFBF3] items-center jusitify-center md-flex">
            <ExploreCategoriesComp
              CompanyName={"Du Good Union"}
              TrustScore={" TrustScore 5.0"}
              bg={dugood}
            />
            <ExploreCategoriesComp
              CompanyName={"South End"}
              TrustScore={"TrustScore 4.9"}
              bg={southend}
            />
            <CompanyReviewedComp />
            <ExploreCategoriesComp />
            <ExploreCategoriesComp />
            <ExploreCategoriesComp />
            <ExploreCategoriesComp />
            <ExploreCategoriesComp /> */}
          </div>
          {/* <ContactInfoComp /> */}
        </div>
      </div>
    </>
  );
};
