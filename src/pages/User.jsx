import React from 'react'
import UserNav from '../components/usercomponents/UserNav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

const User = () => {
  return (
    <>
    <Helmet>
        <title>User Dashboard - LMS</title>
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
    <UserNav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default User