import React from "react";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Home";
import Booking from "./Components/Booking"; // Keep it as Booking if the file is Booking.js
import Contact from "./Components/Contact";
import Review from "./Components/Review";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <Booking />, // Use the existing Booking component
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/review",
    element: <Review />,
  },
];

export default routes;
reportWebVitals();
