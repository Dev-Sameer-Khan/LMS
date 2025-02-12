import React from 'react'
import { Link} from 'react-router-dom'

const AdminHome = () => {
  return (
    <section className='w-full min-h-screen bg-[#111828] pl-[20%] px-20 flex items-center justify-center'>
      <div className="backdrop-blur-lg bg-gray-800 border border-gray-700 p-10 rounded-2xl shadow-lg max-w-2xl text-center text-white">
        <h1 className="text-5xl font-extrabold drop-shadow-md">Welcome to the Admin Dashboard</h1>
        <p className="text-lg text-gray-400 mt-4">
          Manage your data efficiently and keep track of all your activities in one place.
        </p>
        <div className="mt-6">
          <button className="bg-[#5046E5] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#3730A2] transition">
            <Link to="/admin/dashboard">Get Started</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AdminHome