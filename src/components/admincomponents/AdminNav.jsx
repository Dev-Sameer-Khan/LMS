import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { LuSquareMenu } from "react-icons/lu";
import { TiThMenuOutline } from "react-icons/ti";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNav = () => {
  const [pos, setPos] = useState(window.innerWidth <= 599 ? -100 : 0);
  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      window.localStorage.removeItem("userId");
      navigate("/");
    }
  };

  const toggleMenu = () => {
    setPos((prevPos) => (prevPos === -100 ? 0 : -100));
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="rounded-full absolute top-2 left-3 z-[999]"
        onClick={toggleMenu}
      >
         {isOpen ? (
           <IoMdCloseCircle size={35} color="white" className="max-[599px]:block hidden" />
          ) : (
            <IoMenu size={35} color="white" className="max-[599px]:block hidden" />
        )}

      </div>
      <motion.nav
        initial={{ x: pos }}
        animate={{ x: pos + "%" }}
        className="min-h-screen fixed top-0 left-0 z-[99] w-[15%] max-[599px]:w-fit bg-[#202938] text-white flex flex-col max-[599px]:pt-16 max-[599px]:px-2"
      >
        <div className="text text-white font-bold py-4 max-[599px]:p-2 text-center max-[599px]:text-left">
          <NavLink to="/admin" onClick={toggleMenu}>
            <h1 className="font-[semibold] text-[1.5vw] max-[599px]:text-[3.5vw]">
              Admin Dashboard
            </h1>
          </NavLink>
        </div>
        <div className="flex flex-col gap-2 pt-2 font-[semibold] text-[1.2vw] max-[599px]:text-[3.2vw]">
          <NavLink
            to="/admin/dashboard"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "bg-[#3730A2] p-2" : "p-2"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/user"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "bg-[#3730A2] p-2" : "p-2"
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/admin/book"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "bg-[#3730A2] p-2" : "p-2"
            }
          >
            Books
          </NavLink>
          <NavLink
            to="/admin/settings"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "bg-[#3730A2] p-2" : "p-2"
            }
          >
            Settings
          </NavLink>
          <NavLink className="p-2" onClick={handleLogout}>
            Logout
          </NavLink>
        </div>
      </motion.nav>
    </>
  );
};

export default AdminNav;
