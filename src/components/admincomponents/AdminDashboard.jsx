import React from 'react'

const AdminDashboard = () => {
  return (
    <section className='w-full h-screen bg-[#111828] pl-[15%] text-white'>
      <div className="text w-full py-4 px-6 bg-[#3730A2] leading-[1.1]">
        <h1 className='font-[semibold] text-[2.5vw]'>Welcome Maalik Sahab</h1>
        <p className='font-[regular] text-[1.1vw] pl-1'>Manage your library DATA here</p>
      </div>
      <div className="cards w-full flex gap-4 p-6">
        <div className="card-1 p-4 w-[25%] h-full rounded-md bg-[#202938]">
          <h1 className='font-[semibold] text-[1.2vw] text-white'>Total Users</h1>
          <p className='font-[semibold] text-[1.7vw] text-[#595AD3]'>1000</p>
        </div>
        <div className="card-2 p-4 w-[25%] h-full rounded-md bg-[#202938]">
          <h1 className='font-[semibold] text-[1.2vw] text-white'>Books</h1>
          <p className='font-[semibold] text-[1.7vw] text-[#595AD3]'>13</p>
        </div>
      </div>
    </section>
  )
}

export default AdminDashboard