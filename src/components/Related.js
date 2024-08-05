import React from 'react'
import useFetch from '../../hooks/useFetch'
import Image from 'next/image'
import { GoClock } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import FetchLoader from './fetchLoader/FetchLoader';

const Related = ({industry}) => {
    const {allJobs, error, loading} = useFetch("/api/jobs/jobuploads")

    const jobIndustry = industry
    //   console.log(jobIndustry);


      if (error) return (
        <div className="w-11/12 mx-auto container flex justify-center py-14">
          Error: {error}
        </div>
      );
    
      if (loading) return (
        <div className="w-11/12 mx-auto container flex justify-center py-14">
          <FetchLoader/>
        </div>
      );
    
     

    // Filtering jobs by the industry
    const filteredJobs = allJobs.filter(job => 
        job.industry === jobIndustry
    );

    // getting only three related jobs
    const relatedJobs = filteredJobs.slice(0, 3)
      
    
    
  return (
   <>
    <div>{jobIndustry}
    
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-14'>
    {relatedJobs.map((job)=>(
       <div key={job._id} >
       <div className="rounded-t-lg shadow-[0_2px_7px_rgb(0,0,0,0.2)] w-full px-6 py-8 mx-auto mt-5">
         <h1 className="text-xl text-left font-semibold">{job.title}</h1>
         <div className="flex gap-2 items-center mt-4">
           <GoClock className="icon-color" size={20} />
           <p className="text-gray-600">Posted {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}</p>
           
         </div>
         <div className="flex justify-between mt-4 pr-5">
           <div className="rounded px-1 py-1 bg-[#0DCAF01F]">
             <p className="text-[#0dcaf0] text-xs">
               {job.employmentType}
             </p>
           </div>
           <div>
             <p>{job.salary}</p>
           </div>
         </div>
         <hr className="mt-4" />
         <div className="flex items-center gap-4 mt-4">
           <div className="flex justify-center items-center p-2 rounded shadow-md">
             <Image
               src={job.logoUrl}
               width={35}
               height={55}
               alt="Company logo"
             />
           </div>
           <div>
             <h1 className="text-lg font-semibold">{job.company}</h1>
             <div className="flex items-center gap-2">
               <SlLocationPin className="text-gray-600" />
               <p className="text-gray-600">{job.location}</p>
             </div>
           </div>
         </div>
         <div className="mt-7 flex justify-start">
           <Link
             href={`/joblist/${job._id}`}
             className="btn-color text-white p-2 px-6 rounded-lg hover:bg-[#01c0e6] ease-in-out duration-500"
           >
             Apply Now
           </Link>
         </div>
       </div>
     </div>
  ))}
    </div>
   </>
  )
}

export default Related