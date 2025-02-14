import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../components/ErrorPage";
import Contact from "../pages/Contact";
import Book from "../pages/Book";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import Dashboard from "../components/usercomponents/Dashboard";
import UserBook from "../components/usercomponents/UserBook";
import Admin from "../pages/Admin";
import AdminDashboard from "../components/admincomponents/AdminDashboard";
import AdminBook from "../components/admincomponents/AdminBook";
import AdminHome from "../components/admincomponents/AdminHome";
import UserHome from "../components/usercomponents/UserHome";
import AdminUser from "../components/admincomponents/AdminUser";
import AdminSettings from "../components/admincomponents/AdminSettings";
import BooksPreview from "../pages/BooksPreview";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/books/:id",
        element: <BooksPreview />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/user",
    element: <User />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user",
        element: <UserHome />,
      },
      {
        path: "/user/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/book",
        element: <UserBook />,
      },
      {
        path: "/user/profile",
        element: <UserBook />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
     children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
       {
         path: "/admin/dashboard",
         element: <AdminDashboard />,
       },
     {
       path: "/admin/book",
        element: <AdminBook />,
      },
     {
        path: "/admin/user",
        element: <AdminUser />,
      },
     {
        path: "/admin/settings",
        element: <AdminSettings />,
      },
     ],
  },
]);

export default Router;
