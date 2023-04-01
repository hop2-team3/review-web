import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/banks.svg.png";

export const CategoryComp = (props) => {
  return (
    <Link
      className="w-[290px] h-[80px] rounded-[8px] border-2 flex justify-center items-center"
      to={`/${props.categoryName}`}
    >
      <div className="w-[226px] h-[32px] flex items-center gap-[20px]">
        <img className="w-[32px] h-[32px]" src={logo} alt="logo" />
        <p className="capitalize">{props.categoryName}</p>
      </div>
    </Link>
  );
};
