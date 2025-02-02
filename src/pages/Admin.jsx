import React from 'react'
import AdminNav from '../components/admincomponents/AdminNav'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Admin = () => {
  return (
    <>
    <Helmet>
        <title>Admin Dashboard - LMS</title>
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
    <AdminNav/>
    <Outlet/>
    </>
  )
}

export default Admin