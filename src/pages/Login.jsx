import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-full pt-32 pb-16 bg-[#F3F4F6] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-[2vw] font-[semibold] mb-2">Welcome Back!</h1>
        <p className="mb-6 w-[80%] text-gray-600 text-center font-[regular] text-[1.3vw]">
          Login to continue your reading journey.
        </p>
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <label
            className="text-gray-700 font-[semibold] text-[1.1vw]"
            htmlFor="username"
          >
            Email or Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username..."
            className="my-2 p-2 outline-0 font-[regular] text-[1.1vw] border-2 border-gray-300 rounded-lg w-full"
          />

          <label
            className="text-gray-700 font-[semibold] text-[1.1vw]"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password..."
            className="my-2 p-2 outline-0 font-[regular] text-[1.1vw] border-2 border-gray-300 rounded-lg w-full"
          />
          <button
            type="submit"
            className="bg-orange-500 font-[semibold] text-[1.5vw] border-2 text-white my-2 py-2 px-4 rounded-lg w-full"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600 font-[regular] text-[1vw]">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Create an Account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
