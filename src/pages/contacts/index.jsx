import React from 'react'
import Image from 'next/image'



const  Contact = () => {
  return (
    <>
    <div className='relative'>
      
    <div className='w-full  z-10  '> 
      <div className='contact-bg flex flex-col justify-center items-center  h-36 lg:h-64 text-white '>
        <h1 className='text-2xl'>Get In Touch With Us</h1>
        <h2>We want to hear from you</h2>
      </div>
    </div>
      <div className='w-9/12 mx-auto z-20 -mt-5'>
        <form className='bg-[#DBF7FD] rounded-lg py-8 px-2 flex flex-col  gap-3 xl:gap-10 xl:px-0'>
          <div className='flex flex-col gap-3 xl:gap-10 justify-between '>
            <div className='flex flex-col lg:flex-row gap-3 xl:gap-10 w-full mx-auto lg:w-11/12 justify-center items-center'>
              <input type="text" placeholder='Name*' className='w-[90%] outline-none h-11 text-sm px-2 rounded-lg border border-red-600' />
              <input type="text" placeholder='Email*' className='w-[90%] outline-none h-11 text-sm px-2 rounded-lg border' />
            </div>
            <div className='flex flex-col lg:flex-row gap-3 xl:gap-10 lg:gap-5 w-full mx-auto lg:w-11/12 justify-center items-center'>
              <input type="text" placeholder='Phone number*' className='w-[90%] outline-none h-11 text-sm px-2 rounded-lg border' />              
              <input type="text" placeholder='Subject*' className='w-[90%] outline-none h-11 text-sm px-2 rounded-lg border' />
            </div>
            </div>
            <div className='flex justify-center w-full items-center'>
              <textarea rows={7} cols={104} placeholder='Message*' className='w-[91%] lg:w-[92%] rounded-lg px-2 text-sm py-1 border outline-none'/>
            </div>

            <div className='w-11/12 mx-auto'>
              <button className='bg-[#0DCAF0] text-white py-2 rounded-xl w-full hover:bg-white hover:text-black ease-in-out duration-500'>Send Message</button>
            </div>
            

            

          

        </form>
      </div>

      <div className='flex flex-col lg:flex-row mx-auto w-10/12 gap-6 justify-center items-center mt-10 '>
        <div className='box text-center w-[365px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-4'>
          <div className='flex justify-center items-center'>
            <Image src="/Frame117.png" width={100} height={100} alt='image'  />
          </div>
          <div className='mt-3'>
            <h1 className='text-xl font-bold'>Call Us</h1>
            <p className='font-medium text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
            <p className='text-[#0dcaf0] mt-1'>+44567890239</p>
          </div>
        </div>

        <div className='box text-center w-[365px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-4'>
          <div className='flex justify-center items-center'>
            <Image src="/Frame119.png" width={100} height={100}  alt='image' />
          </div>
          <div className='mt-3'>
            <h1 className='text-xl font-bold'>Email Us</h1>
            <p className='font-medium text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
            <p className='text-[#0dcaf0] mt-1'>Commando22@gmail.com</p>
          </div>
        </div>

        <div className='box text-center w-[365px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-4'>
          <div className='flex justify-center items-center'>
            <Image src="/Frame120.png" width={100} height={100} alt='image'  />
          </div>
          <div className='mt-3'>
            <h1 className='text-xl font-bold'>Location</h1>
            <p className='font-medium text-sm mt-2'>Lorem ipsum dolor sit amet.</p>
            <p className='text-[#0dcaf0] mt-1'>23 shinghai street Lagos, Nigeria</p>
          </div>
        </div>






        
      </div>

      
    </div>
    
    </>
  )
}

export default  Contact