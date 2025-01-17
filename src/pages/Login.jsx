import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center'>
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Welcome Back!</h1>
        <p className="mb-6 text-gray-600 text-center">Login to continue your reading journey.</p>
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <label className="mb-2 text-gray-700" htmlFor="emailOrUsername">Email or Username</label>
            <input id="emailOrUsername" type="text" placeholder="Email or username..." className="mb-4 p-2 border border-gray-300 rounded w-full" />
            
            <label className="mb-2 text-gray-700" htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password..." className="mb-4 p-2 border border-gray-300 rounded w-full" />
            <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded w-full">Login</button>
        </form>
        <p className="mt-4 text-gray-600">Don't have an account? <Link to="/register" className="text-blue-500">Create an Account</Link></p>
    </div>
    </section>
  )
}

export default Login