import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SectionOne = () => {
  return (

    <div className='bg-[#F5F3F3] '>
    <div className='container mx-auto py-11 w-11/12 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>
            <div className=' hidden lg:block ml-0 w-full'>
                <Image  src="/dmimg1.png" width={420} height={420} alt='4 developers coding'  className='xl:w-[556px] ml-0'/>
            </div>

            <div className=' mx-auto lg:mr-0'>
                <h3 className='font-semibold w-11/12 lg:w-4/6 text-xl lg:text-xl xl:text-3xl'>Find Millions of Job
                Opportunities Right for You!</h3>

                <p className='pt-4 pb-7 w-full lg:w-[80%] xl:text-xl '>Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.</p>

                <Link href="/joblist" className='mt-4 btn-color  text-white px-8 py-3 rounded-lg 
                hover:bg-cyan-500 hover:text-white xl:mt-6 ease-in-out duration-100'>Discover More</Link>
               
                
            </div>

        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-8'>
            <div className=' mx-auto lg:mx-0  my-auto'>
                <h3 className='font-semibold w-11/12 lg:w-4/6 text-xl lg:text-xl xl:text-3xl' >
                Looking to be one of the World’s Best
                Talents?
                </h3>

                <p className='pt-4 pb-7 w-full lg:w-[80%] xl:text-xl'>
                Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.
                </p>

                <Link href="/joblist" className='mt-4 btn-color text-white px-8 py-3 rounded-lg 
                hover:bg-cyan-500 hover:text-white xl:mt-6 ease-in-out duration-500'>Discover More</Link>

            </div>

            <div className='mx-auto hidden lg:flex justify-end w-full  mr-0 '>
            <Image src="/dmimg2.png" width={420} height={420} alt='a woman coding on her laptop' className='xl:w-[556px] ml-0 ' />

            </div>

        </div>
    </div>
    </div>
  )
}

export default SectionOne