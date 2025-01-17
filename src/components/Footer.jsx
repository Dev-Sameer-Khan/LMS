import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full py-10 px-12 bg-[#202938] text-white flex items-center justify-center gap-6 flex-col'>
      <div className="links flex items-center justify-center gap-6 text-[1.2vw] font-[regular]">
        <Link to='/about'>About Us</Link>
        <Link to='/privacy'>Privacy Policy</Link>
        <Link to='/contact'>Contact Us</Link>
      </div>
      <div className="social flex items-center justify-center gap-8">
        <Link to='https://www.facebook.com/' target='_blank'><FaFacebook color='white' size={26}/></Link>
        <Link to='https://x.com/' target='_blank'><FaTwitter color='white' size={26}/></Link>
        <Link to='https://www.instagram.com/' target='_blank'><FaInstagram color='white' size={26}/></Link>
      </div>
      <p className="text-center text-[1.1vw] font-[regular]">© 2025 Lazy Library. All rights reserved.</p>
    </footer>
  )
}

export default Footer