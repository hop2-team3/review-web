import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { CategoriesExplore } from "./CategoriesExplore";
import { BusinessSignUp } from "./BusinessSignUp";
import { CustomerSignUp } from "./CustomerSignup";
import { Evaluate } from "./Evaluate";
import { ReviewPage } from "./ReviewPage";
import { CustomerLogin } from "./CustomerLogin";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoriesExplore/:id" element={<CategoriesExplore />} />
        <Route path="/BusinessSignUp" element={<BusinessSignUp />} />
        <Route path="/CustomerSignUp" element={<CustomerSignUp />} />
        <Route path="/Evaluate" element={<Evaluate />} />
        <Route path="/Reviews" element={<ReviewPage />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
