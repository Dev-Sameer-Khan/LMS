import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [item, setItem] = useState(null);
  const [nav, setNav] = useState(100);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setItem(localStorage.getItem("userId"));
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setNav(isOpen ? 100 : 0);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 px-12 max-[599px]:px-6 py-2 z-[99] bg-[#1E293B] text-gray-300 flex items-center justify-between font-[semibold] text-[1.1vw]">
        <NavLink to="/" className="logo w-[4%] max-[599px]:w-[10%]">
          <img
            src={logo}
            className="w-full h-full pointer-events-none object-cover"
            alt=""
          />
        </NavLink>

        {isOpen ? (
          <IoCloseCircleOutline size={35} onClick={toggleNav} className="max-[599px]:block hidden" />
        ) : (
          <BiMenuAltRight size={35} onClick={toggleNav} className="max-[599px]:block hidden" />
        )}

        <div className="links flex items-center justify-between gap-20 max-[599px]:hidden">
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

        {item === null ? (
          <div className="btns flex items-center justify-between gap-3">
            <NavLink
              to="/login"
              className="py-2 px-4 bg-orange-600 text-gray-100 rounded-md"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="py-2 px-4 bg-orange-600 text-gray-100 rounded-md"
            >
              Register
            </NavLink>
          </div>
        ) : (
          <></>
        )}
      </nav>

      <motion.nav 
        initial={{x: nav}} 
        animate={{x: nav + "%"}} 
        transition={{ease: "linear", duration: 0.3}} 
        className="mobile-nav w-full h-screen z-[9] bg-black fixed "
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl">
          <NavLink to="/" onClick={toggleNav}>Home</NavLink>
          <NavLink to="/about" onClick={toggleNav}>About Us</NavLink>
          <NavLink to="/book" onClick={toggleNav}>Books</NavLink>
          <NavLink to="/contact" onClick={toggleNav}>Contact</NavLink>
          {item === null && (
            <>
              <NavLink to="/login" onClick={toggleNav}>Login</NavLink>
              <NavLink to="/register" onClick={toggleNav}>Register</NavLink>
            </>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
