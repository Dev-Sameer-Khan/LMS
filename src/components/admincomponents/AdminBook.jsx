import React, { useState } from "react";
import {
  useDeleteBooksMutation,
  useGetBooksByIdQuery,
  useGetBooksQuery,
  useUpdateBookByIdMutation,
  useUpdateBooksMutation,
} from "../../Redux/Books";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

const AdminBook = () => {
  const [id, setId] = useState("b16");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [language, setLanguage] = useState("");
  const [pages, setPages] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [isbn, setIsbn] = useState("");
  const [avCopies, setAvCopies] = useState("");
  const [tCopies, setTCopies] = useState("");
  const [category, setCateory] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [discription, setDiscription] = useState("");
  const [bookCover, setBookCover] = useState("");

  const show = useRef(null);

  const { data = [] } = useGetBooksQuery();
  const {data:book} = useGetBooksByIdQuery(id);
  const [newBook] = useUpdateBooksMutation();
  const [updateBook] = useUpdateBookByIdMutation();
  const [deleteBook] = useDeleteBooksMutation();


  const addbook = (e) => {
    e.preventDefault();
    const answer = confirm("Are you sure you want to add this book?");
    if (answer) {
      let book = {
        title: title,
        author: author,
        publication_year: publicationYear,
        language: language,
        pages: pages,
        publisher: publisher,
        genre: genre,
        isbn: isbn,
        available_copies: avCopies,
        total_copies: tCopies,
        category: category,
        location: location,
        status: status,
        description: discription,
        book_cover: bookCover,
      };

      newBook(book);
      alert("Book Added");
      show.current.style.display = "none";
    } else {
      alert("Book Not Added");
    }
  };

  const handleEdit = (id) => {
    const answer = confirm("Are you sure you want to edit Book?");
    if (answer) {
     setId(id);
      }
  };

  const handleDelete = (id) => {
    const answer = confirm("Are you sure you want to delete Book?");
    if (answer) {
      deleteBook(id);
      alert("Book Deleted");
    } else {
      alert("Book Not Deleted");
    }
  };

  const showCard = () => {
    show.current.style.display = "block";
  };

  return (
    <section className="w-full min-h-screen bg-[#111828] pl-[15%]">
      <Helmet>
        <title>Handle Books - LMS</title>
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
      <div
        ref={show}
        className="absolute h-screen w-[85%] hidden bg-black bg-opacity-50 z-50 p-20 overflow-auto"
      >
        <div className="bg-white p-6 rounded shadow-lg w-full">
          <h2 className="text-[2vw] mb-4 text-center font-[semibold]">
            Add Book Information
          </h2>
          <form onSubmit={addbook}>
            <div className="mb-4 flex justify-between">
              <div className="w-1/3 pr-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Title
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="w-1/3 px-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Author
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="w-1/3 pl-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Publication Year
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={publicationYear}
                  onChange={(e) => setPublicationYear(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="w-1/3 pr-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Language
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </div>
              <div className="w-1/3 px-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Pages
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                />
              </div>
              <div className="w-1/3 pl-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Publisher
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="w-1/3 pr-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Genre
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
              <div className="w-1/3 px-2">
                <label className="block text-[1.2vw] font-[regular]">
                  ISBN
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                />
              </div>
              <div className="w-1/3 pl-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Available Copies
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={avCopies}
                  onChange={(e) => setAvCopies(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="w-1/3 pr-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Total Copies
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={tCopies}
                  onChange={(e) => setTCopies(e.target.value)}
                />
              </div>
              <div className="w-1/3 px-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Category
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={category}
                  onChange={(e) => setCateory(e.target.value)}
                />
              </div>
              <div className="w-1/3 pl-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Location
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="w-1/3 pr-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Status
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <div className="w-1/3 px-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Description
                </label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  rows="3"
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                ></textarea>
              </div>
              <div className="w-1/3 pl-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Book Cover URL
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={bookCover}
                  onChange={(e) => setBookCover(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 w-full text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-full px-10 py-6">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-white text-[2vw] font-[semibold]">All Books</h1>
          <button
            className="bg-[#5046E5] font-[semibold] text-white px-4 py-2 rounded"
            onClick={showCard}
          >
            Add New Book
          </button>
        </div>
        <table className="min-w-full bg-gray-800 text-white text-center">
          <thead>
            <tr className="bg-[#3730A2] font-[semibold]">
              <th className="py-2 text-[1.2vw]">Book Id</th>
              <th className="py-2 text-[1.2vw]">Book Name</th>
              <th className="py-2 text-[1.2vw]">ISBN no</th>
              <th className="py-2 text-[1.2vw]">Total Copies</th>
              <th className="py-2 text-[1.2vw]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((book, index) => (
              <tr key={index} className="font-[regular]">
                <td className="py-2 text-[1vw]">{book.id}</td>
                <td className="py-2 text-[1vw]">{book.title}</td>
                <td className="py-2 text-[1vw]">{book.isbn}</td>
                <td className="py-2 text-[1vw]">{book.total_copies}</td>
                <td className="py-2">
                  <button
                    className="bg-[#5046E5] text-white px-2 py-1 rounded"
                    onClick={()=>handleEdit(book.id)}
                  >
                    <CiEdit />
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                    onClick={() => handleDelete(book.id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminBook;
