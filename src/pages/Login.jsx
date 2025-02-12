import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { setUserIdToLocalStorage, setUserStatusToLocalStorage, getUserStatusFromLocalStorage } from "../Redux/User";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "7dd3";
    setUserIdToLocalStorage(id);
    setUserStatusToLocalStorage("true");
    window.setTimeout(() => {
      const isAdmin = getUserStatusFromLocalStorage();
      isAdmin === "true" ? navigate("/admin") : navigate("/user");
    }, 500)
  };

  return (
    <section className="w-full pt-32 max-[599px]:h-screen max-[599px]:px-6 pb-16 bg-[#F3F4F6] flex items-center justify-center">
      <Helmet>
        <title>Login - LMS</title>
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
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-[2vw] max-[599px]:text-[6vw] font-[semibold] mb-2 max-[599px]:mb-0">Welcome Back!</h1>
        <p className="mb-6 max-[599px]:mb-0 w-[80%] text-gray-600 text-center font-[regular] text-[1.3vw] max-[599px]:text-[3.1vw]">
          Login to continue your reading journey.
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <label
            className="text-gray-700 font-[semibold] text-[1.1vw] max-[599px]:text-[3vw]"
            htmlFor="username"
          >
            Email or Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username..."
            className="my-2 p-2 outline-0 font-[regular] text-[1.1vw] max-[599px]:text-[3vw] border-2 border-gray-300 rounded-lg w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            className="text-gray-700 font-[semibold] text-[1.1vw] max-[599px]:text-[3vw]"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password..."
            className="my-2 p-2 outline-0 font-[regular] text-[1.1vw] max-[599px]:text-[3vw] border-2 border-gray-300 rounded-lg w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 font-[semibold] text-[1.5vw] max-[599px]:text-[3vw] border-2 text-white my-2 py-2 px-4 rounded-lg w-full"
          >
            Login
          </button>
        </form>
        <p className="mt-4 max-[599px]:mt-0 text-gray-600 font-[regular] text-[1vw] max-[599px]:text-[3vw]">
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
