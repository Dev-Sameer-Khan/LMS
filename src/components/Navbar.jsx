import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { IoMdCloseCircle } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { motion } from "framer-motion";

const Navbar = () => {
  const [item, setItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 599);
  const [isOpen, setIsOpen] = useState(false);
  const [navPos, setNavPos] = useState(isMobile ? "100%" : "0");

  useEffect(() => {
    setItem(localStorage.getItem("userId"));

    const handleResize = () => {
      const mobile = window.innerWidth <= 599;
      setIsMobile(mobile);
      setIsOpen(!mobile);
      setNavPos(mobile ? "100%" : "0");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
      setNavPos(isOpen ? "100%" : "0");
    }
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 px-12 max-[599px]:px-6 py-2 z-[99] bg-[#1E293B] text-gray-300 flex items-center justify-between font-[semibold] text-[1.1vw]">
        {/* Logo */}
        <NavLink to="/" className="logo w-[4%] max-[599px]:w-[10%]">
          <img
            src={logo}
            className="w-full h-full pointer-events-none object-cover"
            alt="Logo"
          />
        </NavLink>

        {/* Mobile Menu Button */}
        {isMobile && (
          <div onClick={toggleNav} className="max-[599px]:block hidden">
            {isOpen ? (
              <IoMdCloseCircle size={35} />
            ) : (
              <TiThMenuOutline size={30} />
            )}
          </div>
        )}

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <div className="links flex items-center justify-between gap-20">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500" : ""}>About Us</NavLink>
            <NavLink to="/book" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Books</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-500" : ""}>Contact</NavLink>
          </div>
        )}

        {/* Authentication Buttons */}
        {item === null && !isMobile && (
          <div className="btns flex items-center justify-between gap-3">
            <NavLink to="/login" className="py-2 px-4 bg-orange-600 text-gray-100 rounded-md">Login</NavLink>
            <NavLink to="/register" className="py-2 px-4 bg-orange-600 text-gray-100 rounded-md">Register</NavLink>
          </div>
        )}
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <motion.nav 
          initial={{ x: "100%" }} 
          animate={{ x: navPos }} 
          transition={{ ease: "linear", duration: 0.3 }} 
          className="mobile-nav w-full h-screen z-[9] bg-zinc-100 text-zinc-900 fixed flex flex-col items-center justify-center gap-8 text-5xl font-[semibold]"
        >
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
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
