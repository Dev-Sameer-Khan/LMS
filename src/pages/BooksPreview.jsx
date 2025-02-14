import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useGetBooksByIdQuery, useGetBooksQuery } from "../Redux/Books";
import {
  getUserIdFromLocalStorage,
  useUpdateUserBookMutation,
  useGetUserByIdQuery,
} from "../Redux/User";

const BooksPreview = () => {
  const bookid = localStorage.getItem("bookId")
  const userId = getUserIdFromLocalStorage();
  const { data: books = [], isLoading, isError} = useGetBooksByIdQuery(bookid);
  const { data: userData } = useGetUserByIdQuery(userId);
  const [updateUserBook] = useUpdateUserBookMutation();

  const handleBookPurchase = async (bookId,name) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to purchase this book ${bookId}?`
    );
    if (isConfirmed) {
      try {
        // Get current user's books and append new book
        const currentBooks = userData?.books || [];
        const updatedBooks = [...currentBooks, bookId];

        const book = {
          books: updatedBooks, // Send full updated books array
        };

        await updateUserBook({ id: userId, data: book }).unwrap();
        alert("Book added to your account successfully!");
      } catch (error) {
        console.error("Failed to add book: ", error);
        alert("Failed to add book. Please try again.");
      }
    }
  };
  

  return (
    <div className="container mx-auto px-4 py-20 max-[599px]:pt-20">
      {isLoading ? (
        isError
      ) : (
        <div className="max-w-4xl mx-auto">
          <Link to="/book" className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
            Back to Books
          </Link>
          <div className="bg-white rounded-lg shadow-lg p-8 mt-4">
            <div className="flex flex-col md:flex-row gap-8">
              <img
                src={books.book_cover_url}
                alt={books.title}
                className="w-full md:w-1/3 h-auto object-cover rounded"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">
                  {books.title}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  by {books.author}
                </p>
                <p className="text-gray-700 mb-4">{books.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Genre:</span>{" "}
                    {books.genre}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Status:</span>{" "}
                    {books.status}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">ISBN:</span>{" "}
                    {books.isbn}
                  </p>
                  <button
              className={`py-2 px-4 ${
                books.total_copies === 0 ? "bg-red-700" : "bg-emerald-700"
              } text-gray-100 rounded-md`}
              onClick={() => handleBookPurchase(books.id, books.title)}
            >
              Purchase
            </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksPreview;
