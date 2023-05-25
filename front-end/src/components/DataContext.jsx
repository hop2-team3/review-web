import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();

export const DataContext = ({ children }) => {
  const [companies, setCompanies] = useState();
  const [reviews, setReviews] = useState();
  const commentsURL = "http://localhost:8000/comments/";
  const companiesURL = "http://localhost:8000/companies/";

  useEffect(() => {
    axios
      .get(commentsURL)
      .then(function (res) {
        setReviews(res.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });

    axios
      .get(companiesURL)
      .then(function (res) {
        setCompanies(res.data.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    return () => {};
  }, []);
  return (
    <Context.Provider value={{ companies, setCompanies, reviews, setReviews }}>
      {children}
    </Context.Provider>
  );
};
