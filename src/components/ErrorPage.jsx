import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-orange-500">
      <h1 className="text-8xl font-extrabold animate-bounce">404</h1>
      <h2 className="mt-4 text-4xl font-semibold">Oops! Page Not Found</h2>
      <p className="mt-2 text-lg">It seems we can't find the page you're looking for.</p>
      <p className="mt-2 text-md">But don't worry, you can return to safety!</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105">
        Back to Home
      </Link>
    </div>
  )
}

export default ErrorPage