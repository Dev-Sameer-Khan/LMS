import React from 'react'
import { Link } from 'react-router-dom'

const UserHome = () => {
  return (
    <section className='w-full min-h-screen bg-[#F3F4F6] flex items-center justify-center'>
      <div className="bg-white border border-gray-200 text-gray-800 p-10 rounded-2xl shadow-lg max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold">Welcome to the Library</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore our collection, borrow books, and manage your reading journey all in one place.
        </p>
        <div className="mt-6">
          <Link to="/user/dashboard">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-500 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UserHome