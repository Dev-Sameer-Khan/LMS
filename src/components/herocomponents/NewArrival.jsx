import React from 'react'
import { Link } from 'react-router-dom'

const NewArrival = () => {
  return (
    <section className='w-full py-10 px-12'>
        <div className="text font-[semibold] text-[1.7vw] mb-12">
            <h1>New Arrival</h1>
        </div>
    <div className="cards w-full flex items-center justify-center gap-20 flex-wrap">
    <div className="card-1 w-[20%] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all">
      <Link to='/book'>
      <img src="https://imgv2-2-f.scribdassets.com/img/document/670205255/original/2e0df049e2/1?v=1" alt="The Great Gatsby" className="w-full h-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">Bible Of JavaScript</h2>
        <p className="text-gray-600">Harsh Vandana Sharma</p>
        <p className="text-gray-500">Programming</p>
      </div>
        </Link>
    </div>
    <div className="card-2 w-[20%] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all">
      <Link to='/book'>
      <img src="https://imgv2-2-f.scribdassets.com/img/document/670205255/original/2e0df049e2/1?v=1" alt="The Great Gatsby" className="w-full h-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">Bible Of JavaScript</h2>
        <p className="text-gray-600">Harsh Vandana Sharma</p>
        <p className="text-gray-500">Programming</p>
      </div>
        </Link>
    </div>
    <div className="card-3 w-[20%] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all">
      <Link to='/book'>
      <img src="https://imgv2-2-f.scribdassets.com/img/document/670205255/original/2e0df049e2/1?v=1" alt="The Great Gatsby" className="w-full h-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">Bible Of JavaScript</h2>
        <p className="text-gray-600">Harsh Vandana Sharma</p>
        <p className="text-gray-500">Programming</p>
      </div>
        </Link>
    </div>
    <div className="card-4 w-[20%] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-all">
      <Link to='/book'>
      <img src="https://imgv2-2-f.scribdassets.com/img/document/670205255/original/2e0df049e2/1?v=1" alt="The Great Gatsby" className="w-full h-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">Bible Of JavaScript</h2>
        <p className="text-gray-600">Harsh Vandana Sharma</p>
        <p className="text-gray-500">Programming</p>
      </div>
        </Link>
    </div>
    </div>
    </section>
  )
}

export default NewArrival