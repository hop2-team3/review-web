import React from "react";

export const Noorog = () => {
  const [rate, setRate] = useState(0);
  const handleClick = (num) => {
    setRate(num);
  };
  return (
    <div className="w-screen h-screen bg-[#F1F1E8] flex  items-center gap-[20px]">
      <div className="w-[50px] h-[50px] bg-[black]"></div>
    </div>
  );
};
