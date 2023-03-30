import React from "react";
import { ReviewCarouselComp } from "../components/ReviewCarouselComp";
import { ReviewComp } from "../components/ReviewComp";

export const SignUp = () => {
  return (
    //arilgaj boln
    <div className="w-screen h-screen bg-[#F1F1E8] bg-[green] flex  items-center gap-[20px]">
      <ReviewCarouselComp
        name={"tugu"}
        company={"villiard"}
        review={
          "Yanziin fg dyuiagfkjda hfiduas f lasdjf fdukash f ghduklah fkd gfhiwughkjfuikbuigjhbkgfduiuihgtruiuhiglfuhilguif"
        }
        rate={2}
      />
      <ReviewComp
        name={"tugu"}
        title={"ver nice dude"}
        company={"villiard"}
        review={
          "I like it so much. It very simple and nice to track everything into app. I was used the other app before but not attracted me that long but this simple app keep feeding with information about what i had ate it, so i learn more and penetrate to roots cause of behavior. I using for a month now and Im happy with it."
        }
        rate={2}
        date={"March 29, 2023"}
      />
    </div>
    //arilgaj boln
  );
};
