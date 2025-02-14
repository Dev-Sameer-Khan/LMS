import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useGetBooksQuery } from "../Redux/Books";
import {
  getUserIdFromLocalStorage,
  useUpdateUserBookMutation,
  useGetUserByIdQuery,
} from "../Redux/User";

const Book = () => {
  const userId = getUserIdFromLocalStorage();
  const { data: bookdata = [], error: bookError } = useGetBooksQuery();
  const { data: userData } = useGetUserByIdQuery(userId);
  const [updateUserBook] = useUpdateUserBookMutation();
  const navigate = useNavigate();

  const handleBookClick = (bookId,bookName) => {
    localStorage.setItem("bookId" , bookId)
    navigate(`/books/${bookName}`);
  };

  // const handleBookPurchase = async (bookId,name) => {
  //   const isConfirmed = window.confirm(
  //     `Are you sure you want to purchase this book ${bookId}?`
  //   );
  //   if (isConfirmed) {
  //     try {
  //       // Get current user's books and append new book
  //       const currentBooks = userData?.books || [];
  //       const updatedBooks = [...currentBooks, bookId];

  //       const book = {
  //         books: updatedBooks, // Send full updated books array
  //       };

  //       await updateUserBook({ id: userId, data: book }).unwrap();
  //       alert("Book added to your account successfully!");
  //     } catch (error) {
  //       console.error("Failed to add book: ", error);
  //       alert("Failed to add book. Please try again.");
  //     }
  //   }
  // };

  return (
    <section className="w-full pt-20 py-16 px-12 max-[599px]:px-6 max-[599px]:pb-5">
      <Helmet>
        <title>All Books - LMS</title>
        <meta name="title" content="LMS - Modern Library Management System" />
        <meta
          name="description"
          content="Welcome to LMS, a streamlined solution for managing your library efficiently. Explore, borrow, and manage books effortlessly."
        />
        <meta
          name="keywords"
          content="Library Management System, LMS, Online Library, Book Management"
        />
        <meta name="author" content="Your Name or Brand" />
      </Helmet>
      <div className="bg-blue-500 text-white p-4 mb-6 rounded-lg">
        <h1 className="text-[2.5vw] max-[599px]:text-[3.5vw] font-[semibold]">
          Welcome to the Book Library
        </h1>
        <p className="text-[1.1vw] max-[599px]:text-[2.5vw] font-[regular]">
          Explore a wide range of books, use the search bar and filter options
          below to find your favorite books!
        </p>
      </div>
      <div className="cards w-full flex items-center justify-center gap-16 max-[599px]:gap-8 flex-wrap flex-grow">
        {bookdata.map((value, index) => (
          <div
          onClick={()=> handleBookClick(value.id , value.title)}
            key={index}
            className="card-1 w-[20%] max-[599px]:w-[45%] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all"
          >
            <Link to="/book">
              <div className="w-[20vw] max-[599px]:w-[45vw] h-[25vw] max-[599px]:h-[55vw] overflow-hidden">
                <img
                  src={value.book_cover_url}
                  alt={value.title || "Book Cover"} // Use a dynamic alt text
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </Link>
            <div className="p-4 w-full h-[8vw] max-[599px]:h-[20vw]">
              <h2 className="text-[1.3vw] max-[599px]:text-[3.3vw] font-[semibold]">
                {value.title || "Untitled"}
              </h2>{" "}
              {/* Use dynamic title */}
              <p className="text-gray-600 text-[1vw] max-[599px]:text-[3vw] font-[regular]">
                {value.author || "Unknown Author"}
              </p>{" "}
              {/* Use dynamic author */}
              <p className="text-gray-500 text-[1vw] max-[599px]:text-[3vw] font-[regular]">
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

export default Book;
