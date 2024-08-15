import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;