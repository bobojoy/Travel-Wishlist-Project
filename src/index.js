import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./routes";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);