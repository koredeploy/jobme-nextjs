import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cvcomponent = () => {
  return (
    <div className='bg-[#DBF7FD] flex justify-center items-center py-10'>
      
    <div className='mx-auto w-11/12 container'>
    <div className='  grid grid-cols-1 lg:grid-cols-2 items-center'>
        <div className=' mx-auto'>
            <h1 className='text-xl  md:text-2xl lg:text-3xl md:w-8/12 lg:w-full xl:w-8/12 font-semibold '>Get Jobs that match your Qualifications and Skill Set</h1>

            <p className='mt-10 w-full md:w-[75%] text-base lg:text-lg lg:w-full '>Lorem ipsum dolor sit amet consectetur. Dolor euismod mattis nulla aliquam a. In ac in ornare donec consectetur. Nam semper gravida enim dolor velit aliquam ut ac. </p>

           <Link href="/joblist"> <button className='btn-color text-white mt-5 py-3 px-3 rounded-lg hover:bg-cyan-500 ease-in-out duration-500'>Upload Your CV</button></Link>
        </div>

        <div className='hidden lg:block lg:w-full '>
          <Image src='/cv.png' width={700} height={100} alt='smiling man pointing towards a content' className='w-full h-full ' />


        </div>
    </div>
    </div>
    
    </div>
  )
}

export default Cvcomponent