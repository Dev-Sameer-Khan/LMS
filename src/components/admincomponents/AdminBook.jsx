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
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publication_year, setPublicationYear] = useState("");
  const [language, setLanguage] = useState("");
  const [pages, setPages] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [isbn, setIsbn] = useState("");
  const [available_copies, setAvailable_Copies] = useState("");
  const [total_copies, setTotal_Copies] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [book_cover_url, setBook_Cover_Url] = useState("");

  const showadd = useRef(null);
  const showedit = useRef(null);

  const { data = [] } = useGetBooksQuery();
  const { data: book } = useGetBooksByIdQuery(id);
  const [newBook] = useUpdateBooksMutation();
  const [updateBook] = useUpdateBookByIdMutation();
  const [deleteBook] = useDeleteBooksMutation();

  const addbook = (e) => {
    e.preventDefault();
    const answer = confirm("Are you sure you want to add this book?");
    if (answer) {
      let bookData = {
        title,
        author,
        publication_year,
        language,
        pages,
        publisher,
        genre,
        isbn,
        available_copies,
        total_copies,
        category,
        location,
        status,
        description,
        book_cover_url,
      };

      newBook(bookData);
      alert("Book Added");
      showadd.current.style.display = "none";
    } else {
      alert("Book Not Added");
    }
  };

  const handleEdit = (id, title) => {
    const answer = confirm(`Are you sure you want to edit the book titled "${title}"?`);
    if (answer) {
      setId(id);
      showCard2();
      const showData = data.find((book) => book.id === id);
      if (showData) {
        setTitle(showData.title);
        setAuthor(showData.author);
        setPublicationYear(showData.publication_year);
        setLanguage(showData.language);
        setPages(showData.pages);
        setPublisher(showData.publisher);
        setGenre(showData.genre);
        setIsbn(showData.isbn);
        setAvailable_Copies(showData.available_copies);
        setTotal_Copies(showData.total_copies);
        setCategory(showData.category);
        setLocation(showData.location);
        setStatus(showData.status);
        setDescription(showData.description);
        setBook_Cover_Url(showData.book_cover);
      } else {
        alert("Book not found for editing.");
      }
    } else {
      alert("Edit action canceled.");
    }
  };

  const UpdateBookData = (e) => {
    e.preventDefault();
    let data = {
      title,
      author,
      publication_year,
      language,
      pages,
      publisher,
      genre,
      isbn,
      available_copies,
      total_copies,
      category,
      location,
      status,
      description,
      book_cover_url,
    }
    updateBook({
      id,
      data
    }).then(() => {
      setId("");
      setTitle("");
      setAuthor("");
      setPublicationYear("");
      setLanguage("");
      setPages("");
      setPublisher("");
      setGenre("");
      setIsbn("");
      setAvailable_Copies("");
      setTotal_Copies("");
      setCategory(""); // Corrected spelling from 'Cateory' to 'Category'
      setLocation("");
      setStatus("");
      setDescription(""); // Corrected spelling from 'discription' to 'description'
      setBook_Cover_Url("");
      alert("Book Updated");
      showedit.current.style.display = "none";
    }).catch((error) => {
      console.error("Error updating book:", error);
      alert("Failed to update book. Please try again.");
    });
    showedit.current.style.display = "none";
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
    showadd.current.style.display = "block";
  };
  const showCard2 = () => {
    showedit.current.style.display = "block";
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
        ref={showadd}
        className="absolute h-screen w-[85%] hidden bg-black bg-opacity-50 z-50 p-20 "
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
                  value={publication_year}
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
                  value={available_copies}
                  onChange={(e) => setAvailable_Copies(e.target.value)}
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
                  value={total_copies}
                  onChange={(e) => setTotal_Copies(e.target.value)}
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
                  onChange={(e) => setCategory(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="w-1/3 pl-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Book Cover URL
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={book_cover_url}
                  onChange={(e) => setBook_Cover_Url(e.target.value)}
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
      <div
        ref={showedit}
        className="absolute h-screen w-[85%] hidden bg-black bg-opacity-50 z-50 p-20"
      >
        <div className="bg-white p-6 rounded shadow-lg w-full">
          <h2 className="text-[2vw] mb-4 text-center font-[semibold]">
            Edit Book Information
          </h2>
          <form onSubmit={UpdateBookData}>
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
                  value={publication_year}
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
                  value={available_copies}
                  onChange={(e) => setAvailable_Copies(e.target.value)}
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
                  value={total_copies}
                  onChange={(e) => setTotal_Copies(e.target.value)}
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
                  onChange={(e) => setCategory(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="w-1/3 pl-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Book Cover URL
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={book_cover_url}
                  onChange={(e) => setBook_Cover_Url(e.target.value)}
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
                    onClick={()=>handleEdit(book.id,book.title)}
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
