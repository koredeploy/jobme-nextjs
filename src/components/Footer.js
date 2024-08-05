import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className='border-y-2 py-6 right-0'>
    <div className='w-11/12  container mx-auto grid grid-cols-2 justify-between'>
    <div className='left flex flex-col gap-2'>
        <div className='logo'>
              <Link href="/" className="flex items-center py-4 px-2 ">
              <Image src="/JOBME.png"  width={100}
                      height={120} alt='logo'  />
              </Link>
        </div>

        <div className='social-links flex flex-col md:flex-row px-2 gap-2'>
            <div>
                <h4>Find Us On: </h4>
            </div>

            <div className='flex gap-2'>
                <Image src="/fiby.png" width={25} height={20} alt='facebook logo'/>
                <Image src="/linklogo.png" width={25} height={20} alt='linkedin logo'/>
                <Image src="/instanta.png" width={25} height={20} alt='instagram logo'/>
                <Image src="/xster.png" width={25} height={20} alt='twitter logo'/>                
            </div>
        </div>

    </div>

    <div className='right flex justify-end'>

        <ul className='flex flex-col gap-3 md:flex-row md:gap-6 md:items-center lg:gap-16'>
            <Link href="/joblist">
            <li className='list-disc text-hover'>Find Jobs</li>
            </Link> 

            <Link href="/contacts">
            <li className='list-disc text-hover'>Contact Us</li>
            </Link> 

            <Link href="/signup">
            <li className='list-disc text-hover'>Sign Up</li>
            </Link> 

            <Link href="/login">
            <li className='list-disc text-hover'>Log In</li>
            </Link> 
        </ul>

    </div>

    </div>
    </div>
    </>
  )
}

export default Footer