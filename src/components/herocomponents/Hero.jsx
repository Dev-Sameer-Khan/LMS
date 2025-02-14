import React, { useState, useEffect } from "react";
import banner from "../../assets/images/home-banner.jpeg";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [books, setBooks] = useState([]); // Stores all books
  const [searchResults, setSearchResults] = useState([]); // Stores filtered results
  const [searchQuery, setSearchQuery] = useState(""); // Stores input value
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Fetch books from API
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/books');
      const data = await response.json();
      setBooks(data); // Store all books
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Handle Search Input Change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filteredResults = books.filter((book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleBookClick = (bookId,bookName) => {
    localStorage.setItem("bookId" , bookId)
    navigate(`/books/${bookName}`);
  };

  return (
    <section className="w-full h-screen bg-black relative flex items-center justify-center">
      <img
        className="w-full h-full object-cover opacity-20 pointer-events-none"
        src={banner}
        alt=""
      />
      <div className="text absolute font-[semibold] text-white text-[3.5vw] max-[599px]:text-[7vw] text-center flex items-center justify-center flex-col gap-2">
        <h1>
          Welcome to the Digital{" "}
          <span className="text-orange-500 underline font-[bold]">Library</span>{" "}
          Management System
        </h1>
        <p className="text-[1.3vw] max-[599px]:text-[3.3vw] font-[regular] italic">
          "Explore thousands of books, journals and resources online."
        </p>
        <div className="relative w-1/2 mt-4 max-[599px]:w-full px-6">
          <div className="flex items-center justify-center border-[1px] rounded-full px-6 py-3 gap-4 text-white">
            <CiSearch size={26} />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for books, authors, or genres..."
              className="w-full text-[1.2vw] max-[599px]:text-[3.2vw] outline-0 font-[regular] placeholder:text-gray-500 bg-transparent"
            />
          </div>
          {searchQuery && searchResults.length > 0 && (
            <ul className='absolute top-16 left-6 right-6 bg-[#282828] text-white rounded shadow-md max-h-[30vh] overflow-y-auto z-10'>
              {searchResults.map((book) => (
                <li 
                  key={book.id}
                  className='px-4 py-2 hover:bg-[#464646] cursor-pointer text-left text-[1vw] max-[599px]:text-[3vw]'
                  onClick={() => handleBookClick(book.id, book.title)}
                >
                  <div className="font-bold">{book.title}</div>
                  <div className="text-gray-400 text-sm">by {book.author}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
