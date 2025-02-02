import React from "react";
import Hero from "../components/herocomponents/Hero";
import NewArrival from "../components/herocomponents/NewArrival";
import PopularAuthor from "../components/herocomponents/PopularAuthor";
import BestSellers from "../components/herocomponents/BestSellers";
import Technology from "../components/herocomponents/Technology";
import JoinUs from "../components/herocomponents/JoinUs";
import { Helmet } from "react-helmet-async";
import ThisMonth from "../components/herocomponents/ThisMonth";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LMS - Modern Library Management System</title>
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
      <Hero />
      <ThisMonth />
      <NewArrival />
      <PopularAuthor />
      <BestSellers />
      <Technology />
      <JoinUs />
    </>
  );
};

export default Home;
