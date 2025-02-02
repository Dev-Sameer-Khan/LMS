import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNewUserMutation } from "../Redux/User";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useNewUserMutation();

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      username,
      email,
      password,
      isAdmin: false,
      book: [],
    };
    createUser(data);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="w-full pt-32 pb-16 bg-[#F3F4F6] flex items-center justify-center">
      <Helmet>
        <title>Register - LMS</title>
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
        <h1 className="text-[2vw] font-[semibold] mb-2">Create an Account</h1>
        <p className="mb-6 w-[80%] text-gray-600 text-center font-[regular] text-[1.3vw]">
          Join our community and start your reading journey today.
        </p>
        <form className="w-full" onSubmit={submitHandler}>
          <label
            className="text-gray-700 font-[semibold] text-[1.1vw]"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username..."
            className="my-2 p-2 outline-0 font-[regular] text-[1.1vw] border-2 border-gray-300 rounded-lg w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label
            className="text-gray-700 font-[semibold] text-[1.1vw]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email..."
            className="my-2 p-2 outline-0 font-[regular] text-[1.1vw] border-2 border-gray-300 rounded-lg w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 font-[semibold] text-[1.5vw] border-2 text-white my-2 py-2 px-4 rounded-lg w-full"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-600 font-[regular] text-[1vw]">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login Now
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
