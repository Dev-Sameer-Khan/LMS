import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const AdminNav = () => {

  let navigate = useNavigate()

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
    window.localStorage.removeItem("userId");
    navigate("/");
  }};

  return (
    <nav className='min-h-screen fixed top-0 left-0 w-[15%] bg-[#202938] text-white flex flex-col'>
      <div className="text text-white font-bold py-4 text-center">
        <NavLink to="/admin"><h1 className='font-[semibold] text-[1.5vw]'>Admin Dashboard</h1></NavLink>
      </div>
      <div className='flex flex-col gap-2 pt-2 font-[semibold] text-[1.2vw]'>
        <NavLink to='/admin/dashboard' className={({ isActive }) =>
            isActive ? "bg-[#3730A2] p-2" : "p-2"
          }>Dashboard</NavLink>
        <NavLink to='/admin/user' className={({ isActive }) =>
            isActive ? "bg-[#3730A2] p-2" : "p-2"
          }>Users</NavLink>
        <NavLink to='/admin/book' className={({ isActive }) =>
            isActive ? "bg-[#3730A2] p-2" : "p-2"
          }>Books</NavLink>
        <NavLink to='/admin/settings' className={({ isActive }) =>
            isActive ? "bg-[#3730A2] p-2" : "p-2"
          }>Settings</NavLink>
        <NavLink 
            
          className="p-2"
          onClick={handleLogout}
          >
            Logout</NavLink>
      </div>
    </nav>
  )
}

export default AdminNav