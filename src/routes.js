import React from "react";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Home";
import Booking from "./Components/Booking"; 
import Contact from "./Components/Contact";
import Review from "./Components/Review";
import SignIn from "./Components/SignIn"; 

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
  }
];

export default routes;
reportWebVitals();
