
// "use client"
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { formatDistanceToNow } from 'date-fns';
// import Link from 'next/link';
// import Cookies from 'js-cookie';
// import MapComponent from '@/components/MapComponent';

// export default function JobDetail() {
    

//     const [job, setJob] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const router = useRouter();
//     const { id } = router.query;

//     const fetchJob = async () => {
//         try {
//             const response = await fetch(`/api/jobs/${id}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch job');
//             }
//             const data = await response.json();
//             setJob(data.data);
//             console.log(job);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (id) {
//             fetchJob();
//         }
//     }, [id]);

//     const updateJobId = ()=>{
//         Cookies.set("jobId", job._id)
//     }
    
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     if (!job) return <div>Job not found</div>;
    
//     const postedTime = job?.createdAt ? formatDistanceToNow(new Date(job.createdAt), { addSuffix: true }) : " "


//     return (
//         <div className='w-11/12 mx-auto container'>
//             <MapComponent/>
//             <h1>{job.title}</h1>
//             <p>Company: {job.company}</p>
//             <Image src={job.logoUrl} alt='logo' width={30} height={30}/>
//             <p>Location: {job.location}</p>
//             <p>Employment Type: {job.employmentType}</p>
//             <p>Experience: {job.experience}</p>
//             <p>Salary: {job.salary}</p>
//             <p>Description: {job.description}</p>
//             <h2>Duties:</h2>
//             <p>{postedTime}</p>
//             <ul>
//                 {job.duties.map((duty, index) => (
//                     <li key={index}>{duty}</li>
//                 ))}
//             </ul>
//             <h2>Skills:</h2>
//             <ul>
//                 {job.skills.map((skill, index) => (
//                     <li key={index}>{skill}</li>
//                 ))}
//             </ul>
//             <Link onClick={updateJobId} href="/jobapplication">Äpply Now</Link>
//         </div>
//     );
// }



// import SuccessModal from "@/component/modals/SuccessModal";
"use client"
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import { formatDistanceToNow } from "date-fns";
import Cookies from "js-cookie";
import MapComponent from "@/components/MapComponent";
import Related from "@/components/Related";
import FetchLoader from "@/components/fetchLoader/FetchLoader";

const JobDetailPage = () => {
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const router = useRouter()
  const {id} = router.query
const updateJobId =()=>{
  Cookies.set("jobId", id)
}
const fetchJob = async () => {
  try {
    const response = await fetch(`/api/jobs/${id}`, {
      method: "GET",
    });
    if (!response.ok){
      throw new Error('Failed to fetch job')
    }
    const data = await response.json()
    setJob(data.data)
    console.log(job);
  } catch (error) {
    setError(error.message)
  }finally{
    setLoading(false)
  }
}


  useEffect(()=> {
if (id) {
  fetchJob()
}
  },[id] )


  if (loading) return <div className="w-11/12 mx-auto container flex justify-center items-center py-14"><FetchLoader/></div>
   if (error) return <div className="w-11/12 mx-auto container flex justify-center items-center py-14">{error}</div>;
    if (!job) return <div className="w-11/12 mx-auto container flex justify-center items-center py-14">Job Not found</div>;

    const postedTime = job?.createdAt ? formatDistanceToNow(new Date(job.createdAt), {
      addSuffix: true,
    }) : " "

    const industry = job?.industry

  return (
    <>
  
      <div className="container pt-10 justify-center items-center mx-auto w-11/12 mt-1 mb-6 flex flex-col lg:flex-row gap-10 lg:gap-16 lg:justify-between lg:items-start">
        <div className="w-full lg:w-3/4">
          <div className="bg-[#DBF7FD] rounded-lg p-5 lg:p-4">
            <Image
              src={job.logoUrl}
              width={50}
              height={50}
              alt="google icon"
              className="lg:w-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-2 bg-white"
            />
            <h4 className="font-semibold  mt-2 text-xl lg:text-2xl">{job.title}</h4>
            <p className="my-5 text-lg lg:text-xl  ">{job.subTitle}</p>
            <h5 className="font-semibold text-xl mb-2">Job Information:</h5>
            <div className="bg-white rounded-lg px-2 lg:px-3 py-3 lg:py-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:w-5/12 lg:w-9/12">
              <p className="flex justify-start items-center gap-1 font-semibold ">
                <Image
                  src="/employment-type.svg"
                  width={25}
                  height={25}
                  alt="person"
                  className=""
                />
                Employment Type:
                <span className="text-[#0dcaf0] font-normal">
                  {job.employmentType}
                </span>
              </p>
              <p className="flex justify-start items-center gap-1 font-semibold my-2 lg:my-4">
                <Image
                  src="/location.svg"
                  width={25}
                  height={25}
                  alt="location pin"
                  className=""
                />
                Location:
                <span className="text-[#0dcaf0] font-normal">
                  {job.location}
                </span>
              </p>
              <p className="flex justify-start items-center gap-1 font-semibold">
                <Image
                  src="/date-posted.svg"
                  width={25}
                  height={25}
                  alt="clock"
                  className=""
                />
                Date Posted:
                <span className="text-[#0dcaf0] font-normal">
                  {postedTime}
                </span>
              </p>
              <p className="flex justify-start items-center gap-1 font-semibold my-2 lg:my-4">
                <Image
                  src="/experience.svg"
                  width={25}
                  height={25}
                  alt="suitcase"
                  className=""
                />
                Experience:
                <span className="text-[#0dcaf0] font-normal">
                  {job.experience}
                </span>
              </p>
              <p className="flex justify-start items-center gap-1 font-semibold">
                <Image
                  src="/salary.svg"
                  width={25}
                  height={25}
                  alt="dollar"
                  className=""
                />
                Sarary:
                <span className="text-[#0dcaf0] font-normal">{job.salary}</span>
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
          <MapComponent/>
          </div>
          {/* MAP */}

        </div>

        {/* BULLET POINT CONTENT */}
        <div className="w-full text-left ">
          <h3 className="  mb-2 text-2xl lg:text-3xl font-semibold">Job Description:</h3>
          <p className="text-lg lg:text-xl ">{job.description}</p>

          {/* <p className="mt-5 text-lg lg:text-xl ">{job.description}</p> */}

          <h3 className="mt-4 mb-2 text-2xl lg:text-3xl font-semibold lg:mt-8">
            Duties & Responsibilities:
          </h3>

          <ul>
            {job.duties.map((duty) => (
              <li key={duty._id} className="flex gap-2 text-lg lg:text-xl justify-start items-center">
                <Image src="/blue-tick.svg" width={20} height={20} alt="tick" />
                {duty}
              </li>
            ))}
          </ul>

          <h3 className=" mt-4 mb-2 text-2xl lg:text-3xl font-semibold lg:mt-8">
            Skills & Qualifications:
          </h3>

          <ul>
            {job.skills.map((skill) => (
              <li key={skill._id} className="flex gap-2 text-lg lg:text-xl  justify-start items-center">
                <Image src="/blue-tick.svg" width={20} height={20} alt="tick" />
                {skill}
              </li>
            ))}
          </ul>

          <div className="my-6">
            <Link
            onClick={updateJobId}
              href="/jobapplication"
              className="btn bg-[#0dcaf0] rounded-lg text-white py-2 px-5 my-5"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      <div className="container justify-center items-center mx-auto w-11/12 text-left lg:mb-10 lg:text-center">
        <h3 className="mt-10 font-semibold text-2xl lg:text-3xl">Related Jobs</h3>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
          magna integer turpis. Tortor sollicitudin varius lectus ac .
        </p>

        <Related industry={industry}/> 
        
      </div>
    </>
  );
};

export default JobDetailPage;



