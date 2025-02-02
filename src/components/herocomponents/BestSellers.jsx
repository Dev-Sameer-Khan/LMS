import React from "react";
import { Link } from "react-router-dom";
import { useGetcategoriesQuery } from "../../Redux/Categories";

const BestSellers = () => {
  const { data = [] } = useGetcategoriesQuery();

  // Check if data is available and has the expected structure
  const Bestsellers = data.find(category => category.title === "Bestsellers")?.books || [];
  
  return (
    <section className="w-full py-10 px-12">
      <div className="text font-[semibold] text-[1.7vw] mb-12">
        <h1>Best Sellers</h1>
      </div>
      <div className="cards w-full flex items-center justify-center gap-16 flex-wrap flex-auto">
      <div className="cards w-full flex items-center justify-center gap-16 flex-wrap flex-auto">
        {Bestsellers.length > 0 ? (
          Bestsellers.map((book, index) => (
            <div key={index} className="card-1 w-[20%] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all">
            <Link to="/book">
              <div className="w-[20vw] h-[25vw] overflow-hidden">
              <img
                src={book.thumbnail}
                alt={book.title || "Book Cover"} // Use a dynamic alt text
                className="w-full h-full object-cover pointer-events-none"
              />
              </div>
            </Link>
              <div className="p-4 w-full h-[8vw]">
                <h2 className="text-[1.3vw] font-[semibold]">{book.title || "Untitled"}</h2> {/* Use dynamic title */}
                <p className="text-gray-600 text-[1vw] font-[regular]">{book.author || "Unknown Author"}</p> {/* Use dynamic author */}
                <p className="text-gray-500 text-[1vw] font-[regular]">{book.genre || "Genre"}</p> {/* Use dynamic genre */}
              </div>
          </div>
          ))
        ) : (
          <p>No new arrivals available.</p>
        )}
      </div>
      </div>
    </section>
  );
};

export default BestSellers;
