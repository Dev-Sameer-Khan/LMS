import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";
import { IoMdCloseCircle } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";

const UserNav = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(100);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("isAdmin");
      navigate("/");
    }
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setNav(isOpen ? 100 : 0);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 px-12 max-[599px]:px-6 py-2 z-[99] bg-[#1E293B] text-gray-300 flex items-center justify-between font-[semibold] text-[1.1vw]">
        <NavLink to="/user" className="logo w-[4%] max-[599px]:w-[10%]">
          <img
            src={logo}
            className="w-full h-full pointer-events-none object-cover"
            alt=""
          />
        </NavLink>

        {isOpen ? (
          <IoMdCloseCircle size={35} onClick={toggleNav} className="max-[599px]:block hidden" />
        ) : (
          <TiThMenuOutline size={30} onClick={toggleNav} className="max-[599px]:block hidden" />
        )}

        <div className="links flex items-center justify-between gap-20 max-[599px]:hidden">
          <NavLink
            to="/user/dashboard"
            className={({ isActive }) =>
              isActive ? "text-orange-500 trans" : ""
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/user/book"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Books
          </NavLink>
          <NavLink
            to="/user/profile"
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Profile
          </NavLink>
          <NavLink
            className="py-2 px-4 bg-orange-600 text-gray-100 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </div>
      </nav>

      <motion.nav
        initial={{ x: nav }}
        animate={{ x: nav + "%" }}
        transition={{ ease: "linear", duration: 0.3 }}
        className="mobile-nav w-full h-screen z-[9] bg-zinc-100 text-zinc-900 fixed"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-5xl font-[semibold]">
          <NavLink to="/user/dashboard" onClick={toggleNav}>Dashboard</NavLink>
          <NavLink to="/user/book" onClick={toggleNav}>Books</NavLink>
          <NavLink to="/user/profile" onClick={toggleNav}>Profile</NavLink>
          <NavLink onClick={handleLogout}>Logout</NavLink>
        </div>
      </motion.nav>
    </>
  );
};

export default UserNav;
