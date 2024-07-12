"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Cookies from 'js-cookie';
const Navbar = () => {
  const [userToken, setUserToken]= useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(()=>{
    const token = Cookies.get("token")
    setUserToken(token)
  },[])

  return (
    <>
    <div className='sticky top-0 z-50'>
      
    <nav className="bg-[#FFFFFFCC] py-1 lg:py-2 shadow-lg ">
      <div className="w-11/12 container mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2 ">
              <Image src="/JOBME.png" width={75} height={100} alt='logo' />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1 gap-4">
            <Link href="/" className="py-4 px-2 text-black text-hover transition duration-300">Home</Link>
            <Link href="/joblisting" className="py-4 px-2 text-black text-hover transition duration-300">Job Listings</Link>
            <Link href="/contacts" className="py-4 px-2 text-black text-hover transition duration-300">Contact Us</Link>
          </div>

          {userToken ? <p>LOGOUT</p> :  <div className='hidden md:flex justify-center gap-3'>
            <Link href="/login">
            <button className='w-16 h-10 my-auto rounded-lg btn-color text-white hover:bg-white hover:text-black  ease-in-out duration-500'>Log In</button>
            </Link>

            <Link href="/signup">
            <button className='w-16 ml-2 h-10  my-auto rounded-lg hover-btn hover:text-white ease-in-out duration-500'>Sign Up</button>
            </Link>
          </div>}
          
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-gray-900"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mb-2`}>
        <Link href="/" className="block py-2 px-4 text-sm text-black text-hover">Home</Link>
        <Link href="/about" className="block py-2 px-4 text-sm text-black text-hover">Job Listings</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm text-black text-hover">Contact Us</Link>

        <Link href="/login" className="block py-2 px-4 text-sm text-black text-hover">Log In</Link>
        <Link href="/signup" className="block py-2 px-4 text-sm text-black text-hover">Sign Up</Link>

        
      
      </div>
    </nav>
    
    </div>
    </>
  )
}

export default Navbar