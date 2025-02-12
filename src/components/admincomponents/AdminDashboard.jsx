import React from 'react'
import { useGetBooksQuery } from '../../Redux/Books'
import { useGetUserQuery } from '../../Redux/User'

const AdminDashboard = () => {

  const {data:book} = useGetBooksQuery()
  const {data:user} =  useGetUserQuery()

  return (
    <section className='w-full h-screen bg-[#111828] pl-[15%] max-[599px]:pl-0 text-white'>
      <div className="text w-full py-4 px-6 bg-[#3730A2] leading-[1.1] max-[599px]:pl-[15%]">
        <h1 className='font-[semibold] text-[2.5vw] max-[599px]:text-[4.5vw]'>Welcome Maalik Sahab</h1>
        <p className='font-[regular] text-[1.1vw] max-[599px]:text-[3vw] pl-1'>Manage your library DATA here</p>
      </div>
      <div className="cards w-full flex gap-4 p-6 max-[599px]:pl-[10%]">
        <div className="card-1 p-4 w-[25%] max-[599px]:w-1/2 h-full rounded-md bg-[#202938]">
          <h1 className='font-[semibold] text-[1.2vw] max-[599px]:text-[3.2vw] text-white'>Total Users</h1>
          <p className='font-[semibold] text-[1.7vw] max-[599px]:text-[3.7vw] text-[#595AD3]'>{user?.length}</p>
        </div>
        <div className="card-2 p-4 w-[25%] max-[599px]:w-1/2 h-full rounded-md bg-[#202938]">
          <h1 className='font-[semibold] text-[1.2vw] max-[599px]:text-[3.2vw] text-white'>Books</h1>
          <p className='font-[semibold] text-[1.7vw] max-[599px]:text-[3.7vw] text-[#595AD3]'>{book?.length}</p>
        </div>
      </div>
    </section>
  )
}

export default AdminDashboard