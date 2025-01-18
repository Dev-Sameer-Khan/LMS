import React from "react";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <section className="w-full bg-[#F3F4F6] py-10 px-12 flex items-center justify-center flex-col gap-6 leading-tight">
      <div className="text flex items-center justify-center flex-col gap-2">
        <h1 className="font-[semibold] text-[2.5vw]">
          Start Your Reading Journey Today!
        </h1>
        <p className="font-[regular] text-[1.3vw] w-[70%] text-center">
          Join us to explore an exlusive collection of books across multiple
          genre. Sign up now and begin your reading adventure.
        </p>
      </div>
      <div className="btn flex items-center justify-center gap-8">
        <Link
          to="/register"
          className="text-[1.3vw] text-white bg-[#3B82F6] py-4 px-8 rounded-lg"
        >
          Register Now
        </Link>
        <Link
          to="/more"
          className="text-[1.3vw] text-white bg-[#23C55E] py-4 px-8 rounded-lg"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
