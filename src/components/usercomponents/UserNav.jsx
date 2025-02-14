import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const UserNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("isAdmin");
    navigate("/");
  }};

  return (
    <nav className="w-full fixed top-0 left-0 px-12 py-2 z-[99] bg-[#1E293B] text-gray-300 flex items-center justify-between font-[semibold] text-[1.1vw]">
      <NavLink to="/user" className="logo w-[4%]">
        <img
          src={logo}
          className="w-full h-full pointer-events-none object-cover"
          alt=""
        />
      </NavLink>

      <div className="links flex items-center justify-between gap-20">
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
  );
};

export default UserNav;
