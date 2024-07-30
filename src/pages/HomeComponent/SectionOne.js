import React from 'react'
import Image from 'next/image'

const SectionOne = () => {
  return (

    <div className='bg-[#F5F3F3] '>
    <div className='container mx-auto py-11 w-11/12 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-14'>
            <div className=' hidden lg:block ml-0 w-full'>
                <Image  src="/dmimg1.png" width={400} height={400} alt='4 developers coding'  className='xl:w-[556px] ml-0'/>
            </div>

            <div className=' mx-auto lg:mr-0'>
                <h3 className='font-semibold lg:w-4/6 text-lg lg:text-xl xl:text-3xl'>Find Millions of Job
                Opportunities Right for You!</h3>

                <p className='py-3 xl:text-xl'>Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.</p>

                <button className='mt-4 btn-color text-white px-8 py-2 rounded-lg 
                hover:bg-white hover:text-black xl:mt-6 ease-in-out duration-500'>Discover More</button>
               
                
            </div>

        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-14 mt-8'>
            <div className=' mx-auto lg:mx-0  my-auto'>
                <h3 className='font-semibold lg:w-4/6 text-lg lg:text-xl xl:text-3xl' >
                Looking to be one of the World’s Best
                Talents?
                </h3>

                <p className='py-3 xl:text-xl'>
                Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.
                </p>

                <button className='mt-4 btn-color text-white px-8 py-2 rounded-lg 
                hover:bg-white hover:text-black xl:mt-6 ease-in-out duration-500'>Discover More</button>

            </div>

            <div className='mx-auto hidden lg:flex justify-end w-full  mr-0 '>
            <Image src="/dmimg2.png" width={400} height={400} alt='a woman coding on her laptop' className='xl:w-[556px] ml-0 ' />

            </div>

        </div>
    </div>
    </div>
  )
}

export default SectionOne