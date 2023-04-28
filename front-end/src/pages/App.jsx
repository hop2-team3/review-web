import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { CategoriesExplore } from "./CategoriesExplore";
import { BusinessSignUp } from "./BusinessSignUp";
import { CustomerSignUp } from "./CustomerSignup";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoriesExplore" element={<CategoriesExplore />} />
        <Route path="/BusinessSignUp" element={<BusinessSignUp />} />
        <Route path="/CustomerSignUp" element={<CustomerSignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
