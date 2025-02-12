import React, { useRef, useState } from "react";
import { useGetBooksQuery } from "../../Redux/Books";
import { useDeleteUserMutation, useGetUserByIdQuery, useGetUserQuery, useNewUserMutation, useUpdateUserByIdMutation, useUpdateUserMutation } from "../../Redux/User";
import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const AdminUser = () => {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [books, setBooks] = useState([]);

  const showadd = useRef(null);
  const showedit = useRef(null);

  const { data: user = [] } = useGetUserQuery();
  const { data: userbyid } = useGetUserByIdQuery(id);
  const [newUser] = useNewUserMutation();
  const [updateUser] = useUpdateUserByIdMutation();
  const [deleteUser] = useDeleteUserMutation();

  const addUser = (e) => {
    e.preventDefault();
    const answer = confirm("Are you sure you want to add a User?");
    if (answer) {
      let userData = {
        username,
        email,
        password,
        isAdmin: false,
        books: []
      };

      newUser(userData);
      alert("User Added");
      showadd.current.style.display = "none";
    } else {
      alert("User Not Added");
    }
  };
const handleEdit = (userId) => {
  const answer = confirm("Are you sure you want to edit this user?");
  if (answer) {
    setId(userId);
    showCard2();
    const showData = user.find((user) => user.id === userId);
    if (showData) {
      setUsername(showData.username);
      setEmail(showData.email);
      setIsAdmin(showData.isAdmin);
      // Assuming you want to keep the password field empty for security reasons
      // setPassword(showData.password); // Uncomment if you want to pre-fill the password
    } else {
      alert("User not found for editing.");
    }
  } else {
    alert("Edit action canceled.");
  }
};

const UpdateUserData = (e) => {
  e.preventDefault();
  let data = {
    username,
    email,
    password, // Include password only if it's being updated
    isAdmin,
  };
  updateUser({
    id,
    data,
  })
    .then(() => {
      setId("");
      setUsername("");
      setEmail("");
      setPassword("");
      setIsAdmin(false);
      alert("User Updated");
      showedit.current.style.display = "none";
    })
    .catch((error) => {
      console.error("Error updating user:", error);
      alert("Failed to update user. Please try again.");
    });
  showedit.current.style.display = "none";
};

  const handleDelete = (id) => {
    const answer = confirm("Are you sure you want to delete User?");
    if (answer) {
      deleteUser(id);
      alert("User Deleted");
    } else {
      alert("User Not Deleted");
    }
  };

  const showCard = () => {
    showadd.current.style.display = "block";
  };
  const showCard2 = () => {
    showedit.current.style.display = "block";
  };

  return (
    <section className="w-full min-h-screen bg-[#111828] pl-[15%] max-[599px]:pl-0">
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
            Add User Information
          </h2>
          <form onSubmit={addUser}>
            <div className="mb-4 flex justify-between">
              <div className="w-1/3 pr-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Username
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-1/3 px-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-1/3 pl-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="w-1/3 pr-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Is Admin
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={isAdmin ? 'true' : 'false'}
                  onChange={(e) => setIsAdmin(e.target.value === 'true')}
                  placeholder="Enter 'true' or 'false'"
                />
              </div>
              <div className="w-1/3 px-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Books
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={books}
                  onChange={(e) => setBooks(e.target.value.split(','))}
                  placeholder="Comma separated book IDs"
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
            Edit User Information
          </h2>
          <form onSubmit={UpdateUserData}>
            <div className="mb-4 flex justify-between">
              <div className="w-1/3 pr-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Username
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-1/3 px-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-1/3 pl-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="w-1/3 pr-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Is Admin
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.value)}
                  placeholder="Enter 'true' or 'false'"
                />
              </div>
              <div className="w-1/3 px-2">
                <label className="block text-[1.2vw] font-[regular]">
                  Books
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  value={books.join(',')}
                  onChange={(e) => setBooks(e.target.value.split(','))}
                  placeholder="Comma separated book IDs"
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

      <div className="w-full px-10 max-[599px]:px-6 py-6">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-white text-[2vw] max-[599px]:text-[5vw] font-[semibold]">All Users</h1>
          <button className="bg-[#5046E5] font-[semibold] text-white px-4 py-2 rounded" onClick={showCard}>
            Add New User
          </button>
        </div>
        <table className="min-w-full bg-gray-800 text-white text-center rounded-md overflow-hidden">
          <thead>
            <tr className="bg-[#3730A2] font-[semibold]">
              <th className="py-2 text-[1.2vw] max-[599px]:text-[3.2vw]">User Id</th>
              <th className="py-2 text-[1.2vw] max-[599px]:text-[3.2vw]">User Name</th>
              <th className="py-2 text-[1.2vw] max-[599px]:text-[3.2vw]">User Email</th>
              <th className="py-2 text-[1.2vw] max-[599px]:text-[3.2vw]">Is Admin</th>
              <th className="py-2 text-[1.2vw] max-[599px]:text-[3.2vw]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index} className="font-[regular]">
                <td className="py-2 text-[1vw] max-[599px]:text-[2vw]">{user.id}</td>
                <td className="py-2 text-[1vw] max-[599px]:text-[2vw]">{user.username}</td>
                <td className="py-2 text-[1vw] max-[599px]:text-[2vw]">{user.email}</td>
                <td className="py-2 text-[1vw] max-[599px]:text-[2vw]">
                  {user.isAdmin ? "Yes" : "No"}
                </td>
                <td className="py-2">
                  <button
                    className="bg-[#5046E5] text-white px-2 py-1 rounded"
                    onClick={()=>handleEdit(user.id,user.title)}
                  >
                    <CiEdit />
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                    onClick={() => handleDelete(user.id)}
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

export default AdminUser;
