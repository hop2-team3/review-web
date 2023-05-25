import React from "react";

export const CategoryExploreRatingComp = () => {
  // const [district, setDistrict] = React.useState('');
  // const handleChange = (event: SelectChangeEvent) => {
  //   setDistrict(event.target.value as string);
  // };
  return (
    <>
      <div className="h-[210px] w-[310px] bg-[#FFFFFF] flex flex-col justify-center rounded-[8px]">
        <div className="flex flex-wrap mt-[10px] justify-center h-[180px] w-[300px] ">
          <p className="h-[20px] font-[700] w-[46px] flex items-start">
            Rating
          </p>
          <div className="flex ">
            <button className="w-[69px] h-[40px] border bg-[#D8E4FA] text-[#205CD4] font-[700] rounded-l-lg">
              Any
            </button>
            <button className="w-[69px] h-[40px] border">3.0+</button>
            <button className="w-[69px] h-[40px] border">4.0+</button>
            <button className="w-[69px] h-[40px] border rounded-r-lg">
              4.5+
            </button>
          </div>

          <p className="h-[20px] w-[62px] pt-[6px] font-[700]">Location</p>

          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-[270px] h-[48px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={"choose a district"}>
              Choose a district
            </option>
            <option value="KU">Khan Uul</option>
            <option value="SH">Songino hairhan</option>
            <option value="BG">Bayangol</option>
            <option value="SB">SukhBaatar</option>
            <option value="CH">Chingeltei</option>
            <option value="BH">Bagahangai</option>
            <option value="BN">Baganuur</option>
            <option value="N">Nalaih</option>
            <option value="BZ">Bayanzurkh</option>
          </select>
        </div>
      </div>
    </>
  );
};
