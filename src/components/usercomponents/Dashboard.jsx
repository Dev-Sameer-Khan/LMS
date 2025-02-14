import React from "react";
import { useGetUserByIdQuery } from "../../Redux/User";
import { useGetBooksQuery } from "../../Redux/Books";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userid = localStorage.getItem("userId");

  const { data: bookdata = [] } = useGetBooksQuery();
  const { data } = useGetUserByIdQuery(userid);

 let userbook = bookdata.filter((val)=>{
  return data?.books == val.id
 })


  return (
    <section className="w-full min-h-screen pt-20 px-12">
      <div className="txt text-center">
        <h1 className="font-[semibold] text-[2.5vw]">
          Welcome to Your Dashboard
        </h1>
        <p className="text-[1.2vw] font-[regular]">
          Manage your library activities with ease.
        </p>
      </div>
      <div className="card-container w-full flex items-center justify-between gap-2 flex-wrap pt-10">
        <div className="card w-[24%] px-6 py-4 flex items-start justify-between flex-col gap-4 leading-none bg-white shadow-lg rounded-lg overflow-hidden">
          <h3 className="font-[semibold] text-[1.5vw]">Borrowed Book</h3>
          <p className="font-[regular] text-[1vw]">
            {userbook.length} books currently borrowed.
          </p>
          <button className="py-2 px-4 bg-orange-600 transition hover:bg-orange-500 font-[semibold] text-[1.1vw] text-white rounded">
            View Book
          </button>
        </div>
        <div className="card w-[24%] px-6 py-4 flex items-start justify-between flex-col gap-4 leading-none bg-white shadow-lg rounded-lg overflow-hidden">
          <h3 className="font-[semibold] text-[1.5vw]">Borrowed Book</h3>
          <p className="font-[regular] text-[1vw]">
            You have 3 books currently borrowed.
          </p>
          <button className="py-2 px-4 bg-orange-600 transition hover:bg-orange-500 font-[semibold] text-[1.1vw] text-white rounded">
            View Book
          </button>
        </div>
        <div className="card w-[24%] px-6 py-4 flex items-start justify-between flex-col gap-4 leading-none bg-white shadow-lg rounded-lg overflow-hidden">
          <h3 className="font-[semibold] text-[1.5vw]">Borrowed Book</h3>
          <p className="font-[regular] text-[1vw]">
            You have 3 books currently borrowed.
          </p>
          <button className="py-2 px-4 bg-orange-600 transition hover:bg-orange-500 font-[semibold] text-[1.1vw] text-white rounded">
            View Book
          </button>
        </div>
        <div className="card w-[24%] px-6 py-4 flex items-start justify-between flex-col gap-4 leading-none bg-white shadow-lg rounded-lg overflow-hidden">
          <h3 className="font-[semibold] text-[1.5vw]">Borrowed Book</h3>
          <p className="font-[regular] text-[1vw]">
            You have 3 books currently borrowed.
          </p>
          <button className="py-2 px-4 bg-orange-600 transition hover:bg-orange-500 font-[semibold] text-[1.1vw] text-white rounded">
            View Book
          </button>
        </div>
      </div>
      <div className='w-full py-10 flex items-center justify-center'>
      <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Your Library Activity</h1>
        <p className="text-lg text-gray-600 mt-4">
          View your borrowed books, due dates, and manage your reading journey all in one place.
        </p>
        <div className="mt-6">
          <Link to="/user/book">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-500 transition">
              Browse Books
            </button>
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Dashboard;
