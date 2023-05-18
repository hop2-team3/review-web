import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import drop from "../../assets/hamburger.png";
import axios from "axios";

export function Header() {
  const [toggleDrop, setToggleDrop] = useState(false);
  const URL = "http://localhost:8000/customers/";
  const styles = {
    drop: {
      backgroundImage: `url(${drop})`,
      height: "20px",
      width: "20px",
      marginTop: "2px",
    },
  };
  // axios
  //   .get(URL, {
  //     token: localStorage.getItem("token"),
  //   })
  //   .then(function (res) {
  //     console.log(res.data);
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });

  return (
    <div className="bg-[#AFD3E2] h-[72px] w-full flex flex-row justify-center items-center ">
      <div className="h-[72px] w-[1360px] flex justify-between items-center px-[30px] sm:px-[80px]">
        <Link to="/">
          <img className="h-[34.38px] w-[139.97px] " src={logo} />
        </Link>
        <div>
          <button
            onClick={() => {
              setToggleDrop(!toggleDrop);
              console.log(toggleDrop);
            }}
            className="sm:hidden flex"
            style={styles.drop}
          ></button>
          {toggleDrop ? (
            <div className="absolute w-[180px] h-[150px]  ml-[-140px] mt-[25px] bg-white flex flex-col z-10 justify-between">
              <Link
                to="/categoriesExplore"
                className="text-sm  font-normal pt-[15px]"
              >
                Categories
              </Link>
              <hr />
              <Link to="/CustomerLogin" className="text-sm  font-normal">
                Log in
              </Link>
              <hr />
              <Link to="/BusinessSignUp" className="text-sm   inter  flex ">
                For businesses
              </Link>
              <hr />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-[367px] h-[72px] sm:flex hidden justify-evenly items-center ">
          <Link
            to="/categoriesExplore"
            className="text-l text-[#FCFBF3] font-normal"
          >
            Categories
          </Link>
          <Link
            to="/CustomerLogin"
            className="text-l text-[#FCFBF3] font-normal"
          >
            Log in
          </Link>
          <Link
            to="/BusinessSignUp"
            className="text-l bg-[#FCFBF3] h-[40px] w-[149.02px] bg-blue-400 rounded-[9999px] text-[#1C1C1C] inter font-bold flex justify-center items-center"
          >
            For businesses
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
