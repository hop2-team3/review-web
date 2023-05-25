import React, { useState, useRef, useContext, useEffect } from "react";
import { RatingStarsComp } from "../components/RatingStarsComp";
import { useParams } from "react-router-dom";
import { Context } from "../components/DataContext";
import axios from "axios";

export const Evaluate = () => {
  const param = useParams();
  console.log(param.id);

  const commentsURL = "http://localhost:8000/comments/";
  const copmaniesURL = `http://localhost:8000/companies/${param.id}`;

  const [date, setDate] = useState("");
  const [data, setData] = useState();
  const [rate, setRate] = useState(1);
  const handleClick = (num) => {
    setRate(num);
  };

  const comment = useRef("");
  const title = useRef("");

  let placeholderText;
  switch (rate) {
    case 1:
      placeholderText =
        "What went wrong this time? How can this company improve? Remember to be honest, helpful, and constructive!";
      break;
    case 2:
      placeholderText =
        "What went wrong this time? How can this company improve? Remember to be honest, helpful, and constructive!";
      break;
    case 3:
      placeholderText =
        "What did you like or dislike? What is this company doing well, or how can they improve? Remember to be honest, helpful, constructive!";
      break;
    case 4:
      placeholderText =
        "What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive!";
      break;
    case 5:
      placeholderText =
        "What made your experience great? What is this company doing well? Remember to be honest, helpful, and constructive!";
      break;
    default:
      break;
  }

  useEffect(() => {
    axios
      .get(copmaniesURL)
      .then(function (res) {
        setData(res.data.data[0]);
        console.log(res.data.data[0]);
      })
      .catch(function (err) {
        console.log(err);
      });
    return () => {};
  }, []);
  const submit = () => {
    if (
      comment.current.value !== "" &&
      title.current.value !== "" &&
      date !== ""
    ) {
      axios
        .post(commentsURL, {
          comment: comment.current.value,
          title: title.current.value,
          companyId: param.id,
          date: date,
          rate: rate,
        })
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err.data.message);
        });
    }
  };
  return (
    <div className="w-screen h-[auto] ">
      <div className="w-screen h-[90px] border-1px border-[1px] border-[#E5e5dd] flex items-center justify-center">
        <div className="w-[510px] h-[42px] flex">
          <img className="w-[60px] h-[42px]" src="" alt="logo" />
          <div>
            <p className="w-auto h-[20px]">{data ? data.companyName : ""}</p>
            <p className="w-auto h-[22px]">{data ? data.link : ""}</p>
          </div>
        </div>
      </div>
      <div className="w-screen h-auto sm:min-h-[800px] flex items-center justify-center bg-[#F6F1f1] font-bold text-[19px]">
        <div className=" h-[auto] sm:min-h-[600px] p-[24px] flex flex-col justify-start sm:justify-around gap-[5px] bg-[#F6F1F1] w-[90%] sm:w-[510px] sm:border-[1px] sm:border-[#E5e5dd] sm:bg-[white] rounded-[10px]">
          <div>
            <p>Rate your recent experience</p>
            <RatingStarsComp scale="2" handleClick={handleClick} />
          </div>
          <div>
            <p>Tell us more about your experience</p>
            <textarea
              className="w-[90%] sm:w-[460px] h-[188px] border-[1px] font-normal resize-none rounded-[8px] py-[8px] px-[16px] text-[16px]"
              placeholder={placeholderText}
              ref={comment}
            ></textarea>
          </div>
          <div>
            <p>Date of experience</p>
            <input
              className="w-[90%] sm:w-[460px] h-[44px] border-[1px] font-normal rounded-[4px] py-[10px] px-[16px]"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <p>Give your review a title</p>
            <input
              className="w-[90%] sm:w-[460px] h-[44px] border-[1px] font-normal rounded-[4px] py-[10px] px-[16px]"
              type="text"
              placeholder="What's important for people to know?"
              ref={title}
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={submit}
              className="rounded-sm font-inter-medium text-[color:white] mr-[10%] sm:mr-[0] w-[80px] sm:w-[150px] h-[44px] bg-deep-blue"
            >
              Sumbit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
