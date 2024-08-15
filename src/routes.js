import React from "react";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Home";
import Booking from "./Components/Booking";
import Contact from "./Components/Contact";
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
];

export default routes;
reportWebVitals();