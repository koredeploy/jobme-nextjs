
// import withAuth from '../../components/hoc/withAuth';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// // export async function getServerSideProps() {
// //   const res = await fetch('http://localhost:3001/api/jobs/jobuploads');
// //   const data = await res.json();

// //   return {
// //     props: {
// //       jobs: data.data, // Assuming the response has a `data` field containing the jobs
// //     },
// //   };
// // }

// // const JobListing = ({ jobs }) => {
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (jobs && jobs.length > 0) {
// //       setLoading(false);
// //     }
// //   }, [jobs]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

//   return (
//     <>
//       <div>JobListing</div>
//       <div className='w-11/12 container mx-auto py-10'>
//         {/* {jobs.map((job) => (
//           <div key={job._id} className=''>
//             <div>
//               <Image src={job.logoUrl} alt='logo' width={30} height={30} />
//               <p>{job.comapny}</p>
//               <p>{job.title}</p>
//               <Link href={`/joblisting/${job._id}`}> Apply </Link>
//             </div>
//           </div>
//         ))} */}
//       </div>
//     </>
//   );
// };

// export default withAuth(JobListing);

"use client"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React, { useState, useContext } from 'react'
import withAuth from '@/components/hoc/withAuth'
import Image from 'next/image'
import Link from 'next/link'
import useFetch from '../../../hooks/useFetch'
import Cookies from 'js-cookie'
// import Pagination from '@/components/Pagination'
import DropDown from '../HomeComponent/DropDown'
import { GoClock } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
import AppContext from '../../../context/AppContext'

const JobListing = () => {  
  const {selectedJobType, selectedIndustry, selectedMode, selectedLocation} = useContext(AppContext)
  const userId = Cookies.get("userId")
  console.log(userId);
  const { allJobs: jobs, error, loading } = useFetch('/api/jobs/jobuploads', );
  console.log(jobs);

// pagination
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;



  if (error) return <div className='w-11/12 mx-auto container flex justify-center py-14'>Error: {error}</div>;
  if (loading) return <div className='w-11/12 mx-auto container flex justify-center py-14'>Loading...</div>;
  if (!jobs) return <div className='w-11/12 mx-auto container flex justify-center py-14'>No data</div>;

// job filtering
  const filteredJobs = jobs.filter((job) => {
    return (
      (selectedJobType ? job.employmentType === selectedJobType : true) &&
      (selectedIndustry ? job.industry === selectedIndustry : true) &&
      (selectedMode ? job.employmentType === selectedMode : true) &&
      (selectedLocation ? job.location === selectedLocation : true)
    );
  });


    // Pagination logic
   const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }

  return (

//   <>
//   <div className='w-11/12 container mx-auto '>
//     <div className='flex flex-col gap-10 py-10'>
//       {jobs.map((job) => (
//         <div className='shadow-sm p-3 rounded-md flex gap-2 justify-between' key={job._id}>
//           <Image src={job.logoUrl} alt="logo" width={35} height={35}/>
//           <p>{job.title}</p>
//           <p>{job.description}</p>
//           <p>{job.employmentType}</p>
//           <p>{job.company}</p>
//           <Link href={`/joblisting/${job._id}`} className='bg-cyan-500 text-white rounded p-2'> Apply Now</Link>
//         </div>
//       ))}
//     </div>
    
//     {/* Pagination controls */}
//     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
//       <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
//         <div>
//           <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
//             <a
//               href="#"
//               className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               <span className="sr-only">Previous</span>
//               <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
//             </a>
//             {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
//             <a
//               href="#"
//               aria-current="page"
//               className="relative z-10 inline-flex items-center bg-[#0DCAF0] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               1
//             </a>
//             <a
//               href="#"
//               className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               2
//             </a>
//             <a
//               href="#"
//               className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
//             >
//               3
//             </a>
            
//             <a
//               href="#"
//               className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//             >
//               <span className="sr-only">Next</span>
//               <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   </div>
// </>
<>
<div className='gradient-bg'>
<DropDown/>
</div>
      <div className='w-11/12 container mx-auto '>
        <div className='flex flex-col gap-10 py-10'>
          {currentJobs.map((job) => (
            <div className=' shadow-[0_2px_7px_rgb(0,0,0,0.2)] border-1 border-gray-300 p-4 rounded-md hidden md:grid gap-7 grid-cols-4  justify-between' key={job._id}>
            <div className='flex flex-row gap-3'>
            <div className='rounded-md p-2 shadow-md max-h-14 flex items-center justify-center'>
             <Image src={job.logoUrl} alt="logo" width={35} height={35} />
             </div>
            <div className='flex flex-col '>
            <h2 className='text-lg font-bold'>{job.title}</h2>
            <p>{job.company}</p>
            </div>
            </div>
              <div className='flex flex-col gap-3 ' >
                <span className='px-3 py-1 max-w-24 rounded-lg  flex items-center  justify-center bg-[#0dcaf050]'>
                <p className=' text-[#0DCAF0] '>{job.employmentType}</p>
                </span>
                <div className='flex gap-2 items-center'>
                  <Image src="/carbon_time.png" alt='time' width={25} height={25}/>
                 <p>Posted  {new Date(job.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

             <div className='flex flex-col gap-3 '>
             <div className='flex gap-2 items-center'>
               <Image src="/carbon_location.png" alt='location-icon' width={20} height={20}/>
             <p>{job.location}</p></div>
             <p className='text-xl font-semibold'>{job.salary}</p>
             </div>
              {/* <p>Applied At: {new Date(job.createdAt).toLocaleDateString()}</p> */}
              <div className='flex justify-end items-center'><Link href={`/joblist/${job._id}`} className='bg-cyan-500 text-white rounded p-2'> Apply Now</Link></div>
            </div>
          ))}

{currentJobs.map((job) => (
          <div key={job._id} className="grid grid-cols-1 md:hidden">
            <div className='rounded-t-lg shadow-[0_2px_7px_rgb(0,0,0,0.2)] w-full px-6 py-8 mx-auto mt-5'>
              <h1 className='text-xl font-semibold'>{job.title}</h1>
              <div className='flex gap-2 items-center mt-4'>
                <GoClock className='icon-color' size={20} />
                <p className='text-gray-600'>Posted 24 hours ago</p>
              </div>
              <div className='flex justify-between mt-4 pr-5'>
                <div className='rounded px-1 py-1 bg-[#0DCAF01F]'>
                  <p className='text-[#0dcaf0] text-xs'>{job.employmentType}</p>
                </div>
                <div>
                  <p>{job.salary}</p>
                </div>
              </div>
              <hr className='mt-4' />
              <div className='flex items-center gap-4 mt-4'>
                <div className='flex justify-center items-center p-2 rounded shadow-md'>
                  <Image src={job.logoUrl} width={35} height={55} alt='Company logo' />
                </div>
                <div>
                  <h1 className='text-lg font-semibold'>{job.company}</h1>
                  <div className='flex items-center gap-2'>
                    <SlLocationPin className='text-gray-600' />
                    <p className='text-gray-600'>{job.location}</p>
                  </div>
                </div>
              </div>
              <div className='mt-7'>
                <Link href={`/joblist/${job._id}`} className='btn-color text-white p-2 px-6 rounded-lg hover:bg-[#01c0e6] ease-in-out duration-500'>
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-between  border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 items-center justify-center">
            <div>
              <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    aria-current={currentPage === index + 1 ? 'page' : undefined}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === index + 1 ? 'bg-[#0DCAF0] text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                    } focus:z-20 focus:outline-offset-0`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default withAuth(JobListing)




// fetch data


// export async function getServerSideProps(){
// try {
//     const res = await fetch('http://localhost:3001/');
//   const data = await res.json()
// console.log(data);

//   return {
//     props: {
//       jobs: data.data
//     }
//   }
// } catch (error) {
//   console.error(error);
// }
// }