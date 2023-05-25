import React, { createContext, useState } from "react";

export const Context = createContext();

export const DataContext = ({ children }) => {
  const [companies, setCompanies] = useState();
  const [reviews, setReviews] = useState();
  return (
    <Context.Provider value={{ companies, setCompanies, reviews, setReviews }}>
      {children}
    </Context.Provider>
  );
};
