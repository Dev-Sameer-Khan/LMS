import React from "react";
import { useGetUserByIdQuery } from "../../Redux/User";
import { useGetBooksQuery } from "../../Redux/Books";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userid = localStorage.getItem("userId");

  const { data: bookdata = [] } = useGetBooksQuery();
  const { data } = useGetUserByIdQuery(userid);

 let userbook = bookdata.filter((val)=>{
  return data?.book == val.id
 })


  return (
    <section className="w-full pt-20 px-12">
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
      <div className="cards my-10 w-full flex items-center justify-center gap-16 flex-wrap flex-grow">
        {userbook.map((value, index) => (
          <div
            key={index}
            className="card-1 w-[20%] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all"
          >
            <Link to="/book">
              <div className="w-[20vw] h-[25vw] overflow-hidden">
                <img
                  src={value.book_cover_url}
                  alt={value.title || "Book Cover"} // Use a dynamic alt text
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </Link>
            <div className="p-4 w-full h-[8vw]">
              <h2 className="text-[1.3vw] font-[semibold]">
                {value.title || "Untitled"}
              </h2>{" "}
              {/* Use dynamic title */}
              <p className="text-gray-600 text-[1vw] font-[regular]">
                {value.author || "Unknown Author"}
              </p>{" "}
              {/* Use dynamic author */}
              <p className="text-gray-500 text-[1vw] font-[regular]">
                {value.genre || "Genre"}
              </p>{" "}
              {/* Use dynamic genre */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
