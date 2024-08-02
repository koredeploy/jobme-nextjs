import React from 'react'
import Image from 'next/image'
import DropDown from './DropDown'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='  section-11 h-72 w-full  md:h-64 lg:h-96 xl:h-[466px]  flex flex-col justify-center'>
        <div className='flex justify-center'>
        <h1 className='text-white font-semibold mx-auto text-2xl w-9/12 lg:text-3xl xl:text-4xl text-center md:w-5/12'>SECURE JOBS AS AN AMAZING TALENT!</h1>
        </div>

        <div className='mx-auto md:mt-6 lg:hidden mt-4'>
            <Link href="/joblist" className='btn-color text-lg hover:bg-white hover:text-black text-white px-3 py-1 rounded-md'>
                Find Jobs
            </Link>
        </div>



        <div className='hidden lg:block mt-5  lg:mt-16'>
        <DropDown/>            
        </div>       

        
    </div>
  )
}

export default Hero