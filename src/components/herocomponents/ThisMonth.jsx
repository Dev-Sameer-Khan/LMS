import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetcategoriesQuery } from "../../Redux/Categories";

const ThisMonth = () => {
  const { data = [] } = useGetcategoriesQuery();

  // Check if data is available and has the expected structure
  const topPick =
    data.find((category) => category.title === "Top Picks for This Month")
      ?.books || [];

      const navigate = useNavigate();

  const handleBookClick = (bookId,bookName) => {
    localStorage.setItem("bookId" , bookId)
    navigate(`/books/${bookName}`);
  };

  return (
    <section className="w-full py-10 max-[599px]:py-5 px-12 max-[599px]:px-6">
      <div className="text font-[semibold] text-[1.7vw] max-[599px]:text-[3.7vw] mb-12">
        <h1>Top Picks for This Month</h1>
      </div>
      <div className="cards w-full flex items-center justify-center gap-16 flex-wrap flex-auto">
        <div className="cards w-full flex items-center justify-center gap-16 flex-wrap flex-auto">
          {topPick.length > 0 ? (
            topPick.map((book, index) => (
              <div
              onClick={()=> handleBookClick(book.id , book.title)}
                key={index}
                className="card-1 w-[20%] max-[599px]:w-[40%] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all"
              >
                <Link to="/book">
                  <div className="w-[20vw] max-[599px]:w-[45vw] h-[25vw] max-[599px]:h-[55vw] overflow-hidden">
                    <img
                      src={book.thumbnail}
                      alt={book.title || "Book Cover"} // Use a dynamic alt text
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                </Link>
                <div className="p-4 w-full h-[8vw] max-[599px]:h-[20vw]">
                  <h2 className="text-[1.3vw] max-[599px]:text-[3.3vw] font-[semibold]">
                    {book.title || "Untitled"}
                  </h2>{" "}
                  {/* Use dynamic title */}
                  <p className="text-gray-600 text-[1vw] max-[599px]:text-[3vw] font-[regular]">
                    {book.author || "Unknown Author"}
                  </p>{" "}
                  {/* Use dynamic author */}
                  <p className="text-gray-500 text-[1vw] max-[599px]:text-[3vw] font-[regular]">
                    {book.genre || "Genre"}
                  </p>{" "}
                  {/* Use dynamic genre */}
                </div>
              </div>
            ))
          ) : (
            <p>No This Month available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ThisMonth;
