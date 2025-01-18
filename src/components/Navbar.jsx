import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 px-12 py-2 z-[99] bg-[#1E293B] text-gray-300 flex items-center justify-between font-[semibold] text-[1.1vw]">
      <NavLink to="/" className="logo w-[4%]">
        <img
          src={logo}
          className="w-full h-full pointer-events-none object-cover"
          alt=""
        />
      </NavLink>

      <div className="links flex items-center justify-between gap-20">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500 trans" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-orange-500" : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/book"
          className={({ isActive }) => (isActive ? "text-orange-500" : "")}
        >
          Books
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-orange-500" : "")}
        >
          Contact
        </NavLink>
      </div>

      <div className="btns flex items-center justify-between gap-3">
        <NavLink to="/login" className="py-2 px-4 bg-orange-600 text-gray-100 rounded-md">
          Login
        </NavLink>
        <NavLink to="/register" className="py-2 px-4 bg-orange-600 text-gray-100 rounded-md">
          Register
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
