import React from "react";
import igLogo from "../../assets/igLogo.png";
import twtLogo from "../../assets/twtLogo.png";
import fbLogo from "../../assets/fbLogo.png";
export const Footer = () => {
  return (
    <div>
      <div className="bg-cod-gray font-inter">
        <div className="footer sm:flex flex-wrap text-[color:white] justify-around sm:h-[300px] h-full ">
          <div className="footer1">
            <ul className="space-y-5 sm:space-y-10">
              <li>
                <div className="font-bold font-inter text-[color:gray] ">
                  About
                </div>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
            </ul>
          </div>
          <div className="footer2 mt-10 sm:mt-0 ">
            <ul className="space-y-5 sm:space-y-10">
              <li>
                <div className="font-bold font-inter text-[color:gray]">
                  Community
                </div>
              </li>
              <li>
                <a href="">Trust in reviews</a>
              </li>
              <li>
                <a href="">Log In</a>
              </li>
              <li>
                <a href="">Sign up</a>
              </li>
            </ul>
          </div>
          <div className="footer3 mt-10 sm:mt-0">
            <ul className="space-y-5 sm:space-y-10">
              <li>
                <a className="font-bold font-inter text-[color:gray]">
                  Businesses
                </a>
              </li>
              <li>
                <a href="">Trustpilot Businesses</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Business Login</a>
              </li>
            </ul>
          </div>
          <div className="footer4 mt-10 sm:mt-0">
            <ul className="space-y-5 sm:space-y-10">
              <li>
                <div className="font-bold font-inter text-[color:gray]">
                  Follow us on
                </div>
              </li>
              <li>
                <a href="https://facebook.com">
                  <img alt="fbLogo" src={fbLogo} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <img alt="twtLogo" src={twtLogo} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <img alt="igLogo" src={igLogo} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
