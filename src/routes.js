import React from "react";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Home";
import Booking from "./Components/Booking"; 
import Contact from "./Components/Contact";
import Review from "./Components/Review";
import SignIn from "./Components/SignIn"; 
import Signup from "./Components/Signup"; 
import Login from "./Components/Login";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <Booking />, 
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/review",
    element: <Review />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  }
];

export default routes;
reportWebVitals();
