import KhasBank from "../assets/KhasBank.png";
import KhaanBank from "../assets/KhaanBank.png";
import GolomtBank from "../assets/GolomtBank.png";
import tdbBank from "../assets/tdbBank.png";
import TuriinBank from "../assets/TuriinBank.png";
import capitronBank from "../assets/capitronBank.png";

import React, { useEffect, useContext } from "react";
import { ExploreCategoriesComp } from "../components/ExploreCategoriesComp";
import { ContactInfoComp } from "../components/ContactInfoComp";
import { CategoryExploreRatingComp } from "../components/CategoryExploreRatingComp";
import { CompanyReviewedComp } from "../components/CompanyReviewedComp";
// import { RatingStarsComp } from "../components/RatingStarsComp";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../components/DataContext";

export const CategoriesExplore = (props) => {
  const exploringCat = useParams();
  const { reviews, setReviews, companies, setCompanies } = useContext(Context);

  let companiesList;
  if (companies) {
    companiesList = companies.filter((el) => el.category === exploringCat.id);
  }

  return (
    <>
      <div className="w-[screen] flex flex-col md-flex">
        <div className="h-[231px] w-[screen] bg-[#FFFFFF] flex flex-col text-center justify-center">
          <p className="font-[900] text-[40px] text-[#1C1C1C]">Best in Bank</p>
          <p className="font-[400] text-[15px] text-[#696A6A]">
            Compare the best companies in this category
          </p>
        </div>

        <div className="w-[screen] h-[auto] bg-[#FCFBF3] flex flex-row  justify-center ">
          <div className="flex flex-col w-[6vw] bg-[#FCFBF3] items-center jusitify-center ">
            <CompanyReviewedComp
              companyName={"Khaan Bank"}
              rate={5}
              reviews={"Good"}
              bg={KhaanBank}
            />

            <CompanyReviewedComp
              companyName={"Khas Bank"}
              rate={5}
              reviews={"Good"}
              bg={KhasBank}
            />

            <CompanyReviewedComp
              companyName={"Golomt Bank"}
              rate={5}
              reviews={"Good"}
              bg={GolomtBank}
            />

            <CompanyReviewedComp
              companyName={"TDB Bank"}
              rate={5}
              reviews={"Good"}
              bg={tdbBank}
            />

            <CompanyReviewedComp
              companyName={"Turiin Bank"}
              rate={4.8}
              reviews={"Good"}
              bg={TuriinBank}
            />

            <CompanyReviewedComp
              companyName={"Capitron Bank"}
              rate={4.6}
              reviews={"Good"}
              bg={capitronBank}
            />
            <div className="h-[40px] bg-[#FCFBF3]"></div>
            <div className="flex flex-col w-[880px] bg-[#FCFBF3] items-center jusitify-center md-flex">
              {companiesList
                ? companiesList.map((el, index) => {
                    return (
                      <CompanyReviewedComp
                        companyName={el.companyName}
                        rating={el.rating}
                        key={index}
                        link={el.link}
                        reviews={el.reviews}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
