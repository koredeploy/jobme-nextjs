import React from 'react'
import { GoClock } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import Image from 'next/image';
import useFetch from '../../../hooks/useFetch';
import Link from 'next/link';
import JobCardSwiper from '@/components/JobCardSwiper';
import SkeletonLoader from '@/components/SkeletonLoader';
import HomeSkeleton from '@/components/HomeLoader';
import { formatDistanceToNow } from 'date-fns';

const Card = () => {
    const {recentJobs, loading, error} = useFetch('/api/jobs/jobuploads')
    
    if(loading){
        return <div className='w-11/12 py-10 mx-auto container text-center grid gap-10 grid-col-1 lg:grid-cols-3'>
             <HomeSkeleton/>
             <HomeSkeleton/>
             <HomeSkeleton/>
        </div>
    }

    if(error){
        return <div className='w-11/12 mx-auto container text-center'>Error: {error}</div>
    }

  return (
   <>
<div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-11 pb-16'>
   {recentJobs.map((recent)=>(
    <div key={recent._id} className=' '>
        <div className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]  px-6 py-8 mx-auto mt-5 '>
            <div className=''>
                <div>
                    <h1 className='text-xl font-semibold'>{recent.title}</h1>
                </div>
                <div className='flex gap-2 items-center mt-4'>
                <GoClock className='icon-color' size={20}/>
                <p className='text-gray-600'>Posted {formatDistanceToNow(new Date(recent.createdAt), { addSuffix: true })} </p>

                </div>
                <div className='flex justify-between mt-4'>
                    <div className='rounded  px-1 py-1 bg-[#0DCAF01F]'>
                        <p className='text-[#0dcaf0] text-xs'>{recent.employmentType}</p>
                    </div>
                    <div>
                        <p>{recent.salary}</p>
                    </div>
                </div>
                <hr className='mt-4'/>
                <div className='flex items-center gap-4 mt-4'>
                    <div className='flex justify-center items-center p-2 rounded shadow-md'>
                        <Image src={recent.logoUrl} width={35} height={55} alt='gmail logo' />

                    </div>
                    <div>
                        <div>
                            <h1 className='text-lg font-semibold'>{recent.company}</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SlLocationPin className='text-gray-600' />
                            <p className='text-gray-600' >{recent.location}</p>
                        </div>
                        
                    </div>
                </div>
                <div className='mt-7'>
                    <Link href={`/joblist/${recent._id}`} className='btn-color text-white p-2 px-6 rounded-lg hover:bg-[#01c0e6] ease-in-out duration-500'>
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    </div>

   ))}
</div>
<div className='block md:hidden'>
<JobCardSwiper recentJobs={recentJobs}/>
</div>
   </>
  )
}

export default Card


