import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { SignUp } from "./SignUp";
import { Categories } from "./Categories";
import { Login } from "./Login";
import { Forbusinesses } from "./Forbusinesses";
import ReviewPage, { Review} from "./ReviewPage";
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
    {
      path: "/categories",
      element: <Categories />,
    },
    {
      path: "/forbusinesses",
      element: <Forbusinesses />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/review",
      element: <ReviewPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};
