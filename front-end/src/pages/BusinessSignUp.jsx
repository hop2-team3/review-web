import React, { useRef, useState, useContext } from "react";
import ImageUploading from "react-images-uploading";
import googleLogo from "../assets/googleLogo.png";
import eyeLogo from "../assets/eye.png";
import eyeslashLogo from "../assets/eye-slash.png";
import trashIcon from "../assets/trash.png";
import axios from "axios";

export const BusinessSignUp = () => {
  const URL = "http://localhost:8000/companies/signup";
  const link = useRef("");
  const companyName = useRef("");
  const email = useRef("");
  const phoneNumber = useRef(0);
  const password = useRef("");
  const passwordr = useRef("");
  const category = useRef("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordTypeRep, setPasswordTypeRep] = useState("password");

  const [passwordBg, setPasswordBg] = useState("border-gray");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const togglePasswordRep = () => {
    if (passwordTypeRep === "password") {
      setPasswordTypeRep("text");
      return;
    }
    setPasswordTypeRep("password");
  };

  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const click = () => {
    if (
      link.current.value !== "" &&
      companyName.current.value !== "" &&
      email.current.value !== "" &&
      phoneNumber.current.value !== "" &&
      password.current.value !== "" &&
      passwordr.current.value !== "" &&
      category.current.value !== ""
    ) {
      if (password.current.value === passwordr.current.value) {
        axios
          .post(URL, {
            link: link.current.value,
            companyName: companyName.current.value,
            phoneNumber: phoneNumber.current.value,
            email: email.current.value,
            password: password.current.value,
            category:
              category.current.value.charAt(0).toUpperCase() +
              category.current.value.slice(1),
          })
          .then(function (res) {
            console.log(res);
            window.location.replace("/");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        setPasswordBg("[red]");
      }
    }
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };
  return (
    <div className="h-full w-screen bg-[#146C94] flex flex-row justify-center items-center gap-10 sm:flex flex-wrap sm:h-screen">
      <div className="w-[556px] flex flex-col justify-center items-center">
        <div className="text-[#AFD3E2] text-[32px] font-bold font-inter w-[326px] sm:text-[40px] sm:w-[556px]">
          Create your free Views account
        </div>
        <div className=" text-[#AFD3E2] text-[24px] font-bold font-inter w-[326px] sm:text-[32px] sm:w-[556px]">
          Start collecting reviews today
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center p-[16px] bg-[white] rounded-3xl space-y-5  h-[886px] w-[326px] sm:h-[910px] sm:w-[520px] sm:p-[48px]">
        <div className="sm:w-full -mt-10">
          <div className="w-[197px] h-[78px] text-[30px] font-inter font-bold sm:w-[325px] sm:h-[36px]">
            Create a free account
          </div>
        </div>
        <div className="flex flex-row">
          <a href="google.com">
            <img className="w-[42px]" src={googleLogo} alt="googleLogo" />
          </a>
          <button className="rounded-sm font-inter-medium text-[color:white] w-[220px] h-[44px] bg-deep-blue sm:w-[380px]">
            Sign up with google
          </button>
        </div>
        <div className="flex flex-row items-center">
          <div className="border w-[105px] border-light-gray mr-5 sm:w-[180px]"></div>
          <div className="font-inter font-bold text-sm">OR</div>
          <div className="border w-[105px] border-light-gray ml-5 sm:w-[180px]"></div>
        </div>
        <div className="w-full">
          <div className="font-inter font-bold h-[20px] ml-5 w-[160px] sm:m-0">
            Sign up with email
          </div>
        </div>
        <ul className="space-y-5 flex flex-col justify-center items-center">
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px] w-[262px] sm:w-[422px] pl-2"
              placeholder="Website link"
              ref={link}
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="Company name"
              ref={companyName}
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="Category"
              ref={category}
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="Work email"
              ref={email}
            ></input>
          </li>
          <li>
            <input
              className="border border-border-gray rounded-sm h-[44px]  w-[262px] sm:w-[422px] pl-2"
              placeholder="Phone number"
              type="tel"
              ref={phoneNumber}
            ></input>
          </li>
          <li>
            <div className="flex justify-between w-[262px] sm:w-[422px]">
              <input
                className={`border border-${passwordBg} rounded-sm h-[44px]  w-[262px] sm:w-[370px] pl-2`}
                placeholder="Password"
                type={passwordType}
                ref={password}
              ></input>
              <button
                className="flex justify-center align-center text-[#205CD4] w-[44px] h-[44px] border border-border-gray rounded-sm"
                onClick={togglePassword}
              >
                {passwordType === "password" ? (
                  <img src={eyeLogo} className=" mt-3" />
                ) : (
                  <img src={eyeslashLogo} className=" mt-3" />
                )}
              </button>
            </div>
          </li>
          <li>
            <div className="flex justify-between w-[262px] sm:w-[422px]">
              <input
                className={`border border-${passwordBg} rounded-sm h-[44px]  w-[262px] sm:w-[370px] pl-2`}
                placeholder="Repeat password"
                ref={passwordr}
                type={passwordTypeRep}
              ></input>
              <button
                className="flex justify-center align-center text-[#205CD4] w-[44px] h-[44px] border border-border-gray rounded-sm"
                onClick={togglePasswordRep}
              >
                {passwordTypeRep === "password" ? (
                  <img src={eyeLogo} className=" mt-3" />
                ) : (
                  <img src={eyeslashLogo} className=" mt-3" />
                )}
              </button>
            </div>
          </li>
        </ul>
        <div className="App">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="upload__image-wrapper flex justify-between w-[262px] sm:w-[422px]">
                <button
                  className="border border-border-gray rounded-sm h-[44px] w-[262px] sm:w-[370px] pl-2"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button
                  className="flex justify-center align-center text-[#205CD4] w-[44px] h-[44px] border border-border-gray rounded-sm"
                  onClick={onImageRemoveAll}
                >
                  <img className="mt-3" src={trashIcon} />
                </button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={image["data_url"]}
                      alt=""
                      className="w-[100px] sm:w-[200px]"
                    />
                    <div className="image-item__btn-wrapper">
                      <button
                        className="border border-border-gray rounded-sm "
                        onClick={() => onImageUpdate(index)}
                      >
                        Change
                      </button>
                      <button
                        className="border border-border-gray rounded-sm "
                        onClick={() => onImageRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <button
          className=" rounded-sm font-inter-medium text-[color:white]  w-[262px] sm:w-[422px] h-[44px] bg-deep-blue "
          onClick={click}
        >
          Create free account
        </button>
        {/* <button
          onClick={click}
          disabled={!email || !password}
          className={`w-[358px] h-[48px] bg-[#205cd4] text-[#FFFFFF] hover:bg-[#D8E4FA] hover:text-[#000000] rounded-sm font-inter-medium text-[color:white]  w-[262px] sm:w-[422px] h-[44px] bg-deep-blue `}
        >
          login
        </button> */}
      </div>
    </div>
  );
};
