import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <section className="w-full">
      <Helmet>
        <title>Contact Us - LMS</title>
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
      <div className="contact w-full px-12 max-[599px]:px-6 pt-24 max-[599px]:pt-16 pb-10 max-[599px]:pb-5 bg-[#F3F4F6] flex items-center justify-center max-[599px]:flex-col gap-10 max-[599px]:gap-5">
        <div className="left w-1/2 max-[599px]:w-full flex items-start justify-between flex-col gap-8 max-[599px]:gap-4">
          <div className="heading">
            <h1 className="text-[3vw] max-[599px]:text-[7vw] font-[semibold]">Contact Us</h1>
            <p className="text-gray-600 text-[1.1vw] max-[599px]:text-[3.1vw] font-[regular]">
              We are here to assist you! If you have any questions or feedback,
              feel free to reach out to us. We strive to make your expeirence
              the best possible and are ready to help with any inquiries.
            </p>
          </div>
          <div className="phone-email">
            <h4 className="font-[semibold] text-[1.2vw] max-[599px]:text-[3.2vw]">
              Contact No:{" "}
              <span className="text-orange-500">+91 8957148964</span>
            </h4>
            <h4 className="font-[semibold] text-[1.2vw] max-[599px]:text-[3.2vw]">
              Email: <span className="text-orange-500">lazycodwr@gmal.com</span>
            </h4>
          </div>
          <div className="working-hour text-[1.1vw] max-[599px]:text-[3.1vw] font-[regular]">
            <h4 className="text-[1.5vw] max-[599px]:text-[3.5vw] font-[semibold]">Our Working Hours</h4>
            <p className="text-gray-600">Monday to Friday: 9 AM to 6 PM</p>
            <p className="text-gray-600">Saturday: 10 AM to 2 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
          <div className="visit">
            <h4 className="text-[1.5vw] max-[599px]:text-[3.5vw] font-[semibold]">Visit Us</h4>
            <p className="text-gray-600 text-[1.1vw] max-[599px]:text-[3.1vw] font-[regular]">
              North Imamganj, Aboonagar, Fatehpur, Uttar Pradesh (212601)
            </p>
          </div>
        </div>

        <div className="right w-1/2 max-[599px]:w-full pl-10 max-[599px]:pl-0">
          <form className="w-full flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md font-[regular] text-[1.1vw] max-[599px]:text-[3.1vw]">
            <input
              type="text"
              placeholder="Your name..."
              className="p-2 border-2 border-gray-300 rounded-lg outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your email..."
              className="p-2 border-2 border-gray-300 rounded-lg outline-none"
              required
            />
            <textarea
              placeholder="Your message..."
              className="p-2 border-2 border-gray-300 rounded-lg outline-none"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 rounded-lg font-[semibold]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="FAQ w-full px-24 max-[599px]:px-6 pt-6 pb-10 max-[599px]:pb-5 bg-[#E6E7EB] flex items-center justify-center flex-col gap-4">
        <h2 className="text-[2vw] max-[599px]:text-[6vw] font-[semibold]">
          Frequently Asked Questions
        </h2>
        <div className="flex w-full items-center justify-center flex-col gap-4">
          <div className="faq-item-1 w-full p-4 bg-white rounded-md">
            <h4 className="font-[semibold] text-[1.2vw] max-[599px]:text-[3.1vw]">
              How can I borrow books from the library?
            </h4>
            <p className="font-[regular] text-[1vw] max-[599px]:text-[2.5vw] text-gray-600">
              You can borrow books by signing up on our platform and visiting
              our library. Our staff will guide you through the borrowing
              process.
            </p>
          </div>
          <div className="faq-item-2 w-full p-4 bg-white rounded-md">
            <h4 className="font-[semibold] text-[1.2vw] max-[599px]:text-[3.1vw]">
              Do you charge late fee for overdue books?
            </h4>
            <p className="font-[regular] text-[1vw] max-[599px]:text-[2.5vw] text-gray-600">
              Yes, we charge a small late fee for overdue books, please make
              sure to return on time to avoid aditional charges.
            </p>
          </div>
          <div className="faq-item-3 w-full p-4 bg-white rounded-md">
            <h4 className="font-[semibold] text-[1.2vw] max-[599px]:text-[3.1vw]">
              Can I request a book that is not available in your library?
            </h4>
            <p className="font-[regular] text-[1vw] max-[599px]:text-[2.5vw] text-gray-600">
              Yes, you can request books that are not available in our
              collecton. We'll notify you when ther are available to borrowing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
