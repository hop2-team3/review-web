import React from "react";
import { Link } from "react-router-dom";

export const CategoryComp = (props) => {
  return (
    <Link
      className="w-[290px] h-[80px] rounded-[8px] flex justify-center items-center bg-[#FFFFFF] hover:shadow-[3px_3px_2px_0px_gray] hover:scale-[1.01]"
      to={`/CategoriesExplore/${props.categoryName}`}
    >
      <div className="w-[226px] h-[32px] flex items-center gap-[20px] border-none">
        <p className="capitalize">{props.categoryName}</p>
      </div>
    </Link>
  );
};
