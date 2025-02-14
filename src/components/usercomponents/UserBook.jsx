
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../Redux/Books";
import { getUserIdFromLocalStorage, useGetUserByIdQuery } from "../../Redux/User";

const UserBook = () => {
  const userid = getUserIdFromLocalStorage()

  const { data: bookdata, isLoading: isBookLoading } = useGetBooksQuery();
  const { data: userData, isLoading: isUserLoading } = useGetUserByIdQuery(userid);


  let userbook = isUserLoading ? [] : userData.books.map((value) => {
    return isBookLoading ? [] : bookdata.filter((val) => {
      return value == val.id
    })
  })

  return (
    <section className="w-full pt-20 py-16 px-12">
      <Helmet>
        <title>All Books - LMS</title>
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
      <div className="bg-blue-500 text-white p-4 mb-6 rounded-lg">
        <h1 className="text-[2.5vw] font-[semibold]">
          Welcome to the Book Library
        </h1>
        <p className="text-[1.1vw] font-[regular]">
          Explore a wide range of books, use the search bar and filter options
          below to find your favorite books!
        </p>
      </div>
      <div className="cards w-full flex items-center justify-center gap-16 flex-wrap flex-grow">
        { isBookLoading? "Loading..." : userbook.length === 0 ? "Rent Some Books first..." : userbook.map((value, index) => (
          <div
            key={index}
            className="card-1 w-[20%] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all"
          >
            <Link to="/book">
              <div className="w-[20vw] h-[25vw] overflow-hidden">
                <img
                  src={value.book_cover_url}
                  alt={value.title || "Book Cover"} // Use a dynamic alt text
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            </Link>
            <div className="p-4 w-full h-[8vw]">
              <h2 className="text-[1.3vw] font-[semibold]">
                {value.title || "Untitled"}
              </h2>{" "}
              {/* Use dynamic title */}
              <p className="text-gray-600 text-[1vw] font-[regular]">
                {value.author || "Unknown Author"}
              </p>{" "}
              {/* Use dynamic author */}
              <p className="text-gray-500 text-[1vw] font-[regular]">
                {value.genre || "Genre"}
              </p>{" "}
              {/* Use dynamic genre */}
            </div>
            <button
              className="m-4 py-2 px-4 bg-orange-600 text-gray-100 rounded-md"
              onClick={() => getid(value.id)}
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </section>
  )
};

export default UserBook;
