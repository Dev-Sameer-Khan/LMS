import React from "react";
import banner from "../../assets/images/home-banner.jpeg";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black relative flex items-center justify-center">
      <img
        className="w-full h-full object-cover opacity-20 pointer-events-none"
        src={banner}
        alt=""
      />
      <div className="text absolute font-[semibold] text-white text-[3.5vw] flex items-center justify-center flex-col gap-2">
        <h1>
          Welcome to the Digital{" "}
          <span className="text-orange-500 underline font-[bold]">Library</span>{" "}
          Management System
        </h1>
        <p className="text-[1.3vw] font-[regular] italic">
          "Explore thousands of books, journals and resources online."
        </p>
        <div className="relative w-1/2 mt-4">
          <div className="flex items-center justify-center border-[1px] rounded-full px-6 py-3 gap-4 text-white">
            <CiSearch size={26} />
            <input
              type="text"
              placeholder="Search for books, authors, or genres..."
              className="w-full text-[1.2vw] outline-0 font-[regular] placeholder:text-gray-500 bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
