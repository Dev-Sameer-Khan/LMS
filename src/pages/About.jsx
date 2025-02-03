import React from "react";
import { Helmet } from "react-helmet-async";
import anwardp from "../assets/images/anwardp.jpeg";

const About = () => {
  return (
    <section className="w-full px-12 pt-20 pb-10 flex items-center justify-center flex-col gap-10">
      <Helmet>
        <title>About Us - LMS</title>
        <meta name="title" content="About Us - LMS" />
        <meta
          name="description"
          content="Learn more about LMS, our mission, vision, and the innovative features that make library management easy and effective."
        />
        <meta
          name="keywords"
          content="About LMS, Library Management System, About Library System"
        />
        <meta name="author" content="Your Name or Brand" />
      </Helmet>
      <div className="about flex items-center justify-center flex-col">
        <h1 className="font-[semibold] text-[3vw]">About Us</h1>
        <p className="font-[regular] text-[1.2vw] text-gray-600">
          Discover more about our library and our mission to bring knodwledge to
          everyone.
        </p>
      </div>
      <div className="mission flex items-center justify-center flex-col">
        <h1 className="font-[semibold] text-[2vw]">Our Mission</h1>
        <p className="font-[regular] text-[1.2vw] w-[90%] text-center text-gray-600">
          Our mission is to provide a seamlessand efficent library system that
          enhance the user expirence while enable acces to knodwledge and
          resources.
        </p>
      </div>
      <div className="team w-full flex items-center justify-center flex-wrap gap-10 pointer-events-none">
        <h1 className="font-[semibold] text-[2vw]">Meet Our team</h1>
        <div className="profiles w-full flex items-center justify-center gap-10">
          <div className="profile-1 w-[20%] flex items-center gap-4 justify-center flex-col">
            <img
              className="w-1/2 rounded-full object-cover"
              src="https://avatars.githubusercontent.com/u/131584949?v=4"
              alt="Profile 1"
            />
            <div className="text text-center">
              <h2 className="font-[semibold] text-[1.5vw]">Sameer Khan</h2>
              <p className="font-[regular] text-[1.2vw] leading-none text-gray-600">
                Creative Frontend Developer
              </p>
            </div>
          </div>
          <div className="profile-2 w-[20%] flex items-center gap-4 justify-center flex-col">
            <img
              className="w-1/2 rounded-full object-cover"
              src={anwardp}
              alt="Profile 1"
            />
            <div className="text text-center">
              <h2 className="font-[semibold] text-[1.5vw]">
                Mohammed Anwar Uddin
              </h2>
              <p className="font-[regular] text-[1.2vw] leading-none text-gray-600">
                Frontend Developer
              </p>
            </div>
          </div>
          <div className="profile-3 w-[20%] flex items-center gap-4 justify-center flex-col">
            <img
              className="w-1/2 rounded-full object-cover"
              src="https://res.cloudinary.com/dpnc8ddpf/image/upload/v1733037028/japasey8rxmxes20zkrm.jpg"
              alt="Profile 1"
            />
            <div className="text text-center">
              <h2 className="font-[semibold] text-[1.5vw]">Abhisekh Kumar</h2>
              <p className="font-[regular] text-[1.2vw] leading-none text-gray-600">
                Backend Developer
              </p>
            </div>
          </div>
          <div className="profile-4 w-[20%] flex items-center gap-4 justify-center flex-col">
            <img
              className="w-1/2 rounded-full object-cover"
              src="https://avatars.githubusercontent.com/u/161440680?v=4"
              alt="Profile 1"
            />
            <div className="text text-center">
              <h2 className="font-[semibold] text-[1.5vw]">Muhammad Muneeb</h2>
              <p className="font-[regular] text-[1.2vw] leading-none text-gray-600">
                UI & UX Designer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact flex items-center justify-center flex-col gap-5">
        <div className="head text-center">
          <h1 className="font-[semibold] text-[2vw] my-2">Contact Us</h1>
          <p className="font-[regular] text-[1.2vw] text-gray-600">
            If you have any question or need more information. feel free to get
            in touch with us.
          </p>
        </div>
        <div className="contact text-center">
          <p className="font-[regular] text-[1.2vw] text-gray-600">
            Email: lazycodwr@gmail.com
          </p>
          <p className="font-[regular] text-[1.2vw] text-gray-600">
            Phone: +91 8957148964
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
