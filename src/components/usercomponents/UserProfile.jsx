import React from 'react'
import { useGetUserByIdQuery } from "../../Redux/User";

const UserProfile = () => {
  const userid = localStorage.getItem("userId");
  const { data } = useGetUserByIdQuery(JSON.parse(userid));

  return (
    <div className='w-full min-h-screen bg-[#F3F4F6] flex items-center justify-center py-20 max-[599px]:px-6'>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full">
        <div className="text-center">
          <div className="w-24 h-24 bg-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl text-white font-bold">{data?.username?.[0]?.toUpperCase()}</span>
          </div>
          <h1 className='text-4xl font-bold mb-8 text-gray-800'>User Profile</h1>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className='text-sm text-gray-500 mb-1'>Username</p>
            <p className='text-lg font-semibold text-gray-800'>{data?.username}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className='text-sm text-gray-500 mb-1'>Email</p>
            <p className='text-lg font-semibold text-gray-800'>{data?.email}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className='text-sm text-gray-500 mb-1'>Account Type</p>
            <p className='text-lg font-semibold text-gray-800'>{data?.isAdmin ? 'Administrator' : 'Standard User'}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className='text-sm text-gray-500 mb-1'>Books Borrowed</p>
            <p className='text-lg font-semibold text-gray-800'>{data?.books?.length ? data.books.join(', ') : 'No books borrowed'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile