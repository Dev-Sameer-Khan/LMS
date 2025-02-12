import React from 'react'

const AdminSettings = () => {
  return (
    <section className='w-full min-h-screen bg-[#111828] pl-[15%] flex items-center justify-center'>
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-10 rounded-2xl shadow-lg max-w-2xl text-center text-white">
        <h1 className="text-4xl font-extrabold drop-shadow-md">Settings</h1>
        <p className="text-lg text-gray-300 mt-4">
          Adjust your preferences and manage your account settings here.
        </p>
        <div className="mt-6 space-y-4 text-left">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Dark Mode</label>
            <input type="checkbox" className="w-5 h-5 accent-white" />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Notifications</label>
            <input type="checkbox" className="w-5 h-5 accent-white" />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Language</label>
            <select className="bg-gray-800 text-white p-2 rounded w-full">
              <option>English</option>
              <option>Hindi</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-white/20 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-white/30 transition">
            Save Settings
          </button>
        </div>
      </div>
    </section>
  )
}

export default AdminSettings