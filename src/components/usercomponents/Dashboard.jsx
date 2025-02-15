import React from "react";
import { useGetUserByIdQuery } from "../../Redux/User";
import { useGetBooksQuery } from "../../Redux/Books";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userid = localStorage.getItem("userId");
  const { data } = useGetUserByIdQuery(JSON.parse(userid));


  return (
    <section className="w-full min-h-screen pt-20 px-12 max-[599px]:px-6">
      <div className="txt text-center bg-gradient-to-r from-orange-100 to-orange-50 p-8 rounded-xl shadow-sm">
        <h1 className="font-bold text-[2.8vw] max-[599px]:text-[4.5vw] text-gray-800 mb-3">
          Welcome Back to Your Dashboard
        </h1>
        <p className="text-[1.3vw] max-[599px]:text-[3.2vw] text-gray-600">
          Your personal library hub for seamless book management
        </p>
      </div>
      <div className="card-container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        <div className="card p-6 bg-white shadow-lg rounded-xl border-l-4 border-orange-500 hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[1.5vw] max-[599px]:text-[3.5vw] text-gray-800">Borrowed Books</h3>
            <span className="text-[2vw] max-[599px]:text-[5vw] text-orange-500">{data?.books.length}</span>
          </div>
          <p className="font-medium text-[1.1vw] max-[599px]:text-[3.1vw] text-gray-600 mb-4">
            Currently in your collection
          </p>
          <Link to="/user/book">
            <button className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-500 font-semibold text-[1.1vw] max-[599px]:text-[3.1vw] text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              <span>View Collection</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </Link>
        </div>
        
        <Link to="/user/book">
        <div className="card p-6 bg-white shadow-lg rounded-xl border-l-4 border-blue-500 hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[1.5vw] max-[599px]:text-[3.5vw] text-gray-800">Reading Stats</h3>
            <span className="text-blue-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </span>
          </div>
          <p className="font-medium text-[1.1vw] max-[599px]:text-[3.1vw] text-gray-600 mb-4">
            Track your reading progress
          </p>
          <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 font-semibold text-[1.1vw] text-white rounded-lg transition-colors duration-300">
            View Statistics
          </button>
        </div>
        </Link>

        <Link to="/book">
        <div className="card p-6 bg-white shadow-lg rounded-xl border-l-4 border-green-500 hover:scale-105 transition-transform">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[1.5vw] max-[599px]:text-[3.5vw] text-gray-800">Recommendations</h3>
            <span className="text-green-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
            </span>
          </div>
          <p className="font-medium text-[1.1vw] max-[599px]:text-[3.1vw] text-gray-600 mb-4">
            Discover new books
          </p>
          <button className="w-full py-3 px-4 bg-green-600 hover:bg-green-500 font-semibold text-[1.1vw] max-[599px]:text-[3.1vw] text-white rounded-lg transition-colors duration-300">
            Explore More
          </button>
        </div>
        </Link>
      </div>

      <div className="w-full py-10 flex items-center justify-center">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-2xl shadow-lg max-w-3xl text-center transform hover:scale-[1.02] transition-transform">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Your Reading Journey Awaits</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover new stories, track your progress, and join a community of book lovers.
          </p>
          <Link to="/user/book">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-md hover:bg-orange-500 transition-colors duration-300 flex items-center gap-2 mx-auto">
              <span>Explore Library</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
