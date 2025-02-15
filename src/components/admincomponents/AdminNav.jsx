import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 599);
  const [isOpen, setIsOpen] = useState(!isMobile); // Always open on desktop
  const [pos, setPos] = useState(isMobile ? "-100%" : "0");

  let navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 599;
      setIsMobile(mobile);
      setIsOpen(!mobile);
      setPos(mobile ? "-100%" : "0");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      window.localStorage.removeItem("userId");
      navigate("/");
    }
  };

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
      setPos(isOpen ? "-100%" : "0");
    }
  };

  return (
    <>
      {/* Mobile Menu Button (Only for mobile screens) */}
      {isMobile && (
        <div className="absolute top-2 left-3 z-[999]" onClick={toggleMenu}>
          {isOpen ? (
            <IoMdCloseCircle size={35} color="white" />
          ) : (
            <IoMenu size={35} color="white" />
          )}
        </div>
      )}

      {/* Sidebar Navigation */}
      <motion.nav
        initial={{ x: pos }}
        animate={{ x: pos }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className={`min-h-screen fixed top-0 left-0 z-[99] w-[15%] max-[599px]:w-[60%] bg-[#202938] text-white flex flex-col pt-8  ${
          isMobile ? "max-[599px]:pt-16" : ""
        }`}
      >
        <div className="text-white font-bold py-4 text-center">
          <NavLink to="/admin" onClick={isMobile ? toggleMenu : undefined}>
            <h1 className="font-[semibold] text-[1.5vw] max-[599px]:text-[5vw]">
              Admin Dashboard
            </h1>
          </NavLink>
        </div>

        <div className="flex flex-col gap-3 pt-2 font-[semibold] text-[1.2vw] max-[599px]:text-[4vw]">
          <NavLink to="/admin/dashboard" onClick={isMobile ? toggleMenu : undefined} className={({ isActive }) => (isActive ? "bg-[#3730A2] p-3" : "p-3")}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/user" onClick={isMobile ? toggleMenu : undefined} className={({ isActive }) => (isActive ? "bg-[#3730A2] p-3" : "p-3")}>
            Users
          </NavLink>
          <NavLink to="/admin/book" onClick={isMobile ? toggleMenu : undefined} className={({ isActive }) => (isActive ? "bg-[#3730A2] p-3" : "p-3")}>
            Books
          </NavLink>
          <NavLink to="/admin/settings" onClick={isMobile ? toggleMenu : undefined} className={({ isActive }) => (isActive ? "bg-[#3730A2] p-3" : "p-3")}>
            Settings
          </NavLink>
          <NavLink className="p-3 text-red-400 cursor-pointer" onClick={handleLogout}>
            Logout
          </NavLink>
        </div>
      </motion.nav>
    </>
  );
};

export default AdminNav;
