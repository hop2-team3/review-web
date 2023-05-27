import React from "react";
import { RatingStarsComp } from "../RatingStarsComp";
import { Link } from "react-router-dom";
import browse from "../../assets/browseLink.png";
import dial from "../../assets/dial.png";

export const CompanyReviewedComp = (props) => {
  return (
    <Link
      to={`/Reviews/${props.companyName}`}
      className="w-[832px] h-[174px] flex flex-col border-2 border-[#D3D3D3] bg-[white] rounded-[8px] box-border hover:shadow-[0px_0px_5px_0px_gray] sm:scale-[1] scale-[0.5] m-4"
    >
      <div className="w-[790px] h-[75px] m-[25px] flex flex-row gap-[32px]">
        <img className="w-[72px] h-auto" src={props.bg} alt="company logo" />
        <div className="w-auto h-[75px] flex flex-col gap-[6px]">
          <p className="w-auto h-[20px]">{props.companyName}</p>
          <div className="w-auto h-[20px] flex flex-row items-center gap-[12px]">
            <RatingStarsComp rate={props.rating} />
            TrustScore: {props.rating}
            <div className="w-[1px] h-[12px]"></div>
            Reviews: {props.reviews}
          </div>
          <p className="w-auto h-[20px]">{props.link}</p>
        </div>
      </div>
      <hr />
      <div className="w-[798px] h-[24px]  mx-[17px] my-[12px] flex flex-row items-center   gap-[12px]">
        <div
          className="w-[16px] h-[16px]"
          style={{
            backgroundImage: `url(${browse})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          //page hoorond usreh
          href={props.link}
        ></div>
        <div
          className="w-[16px] h-[16px]"
          style={{
            backgroundImage: `url(${dial})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          href=""
        ></div>
        <div className="w-[1px] h-[12px] bg-[gray]"></div>
        tags
      </div>
    </Link>
  );
};
