import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { SignUp } from "./SignUp";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={router} />;
};
