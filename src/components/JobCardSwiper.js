// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from 'next/image';
// import Link from 'next/link';
// import { GoClock } from 'react-icons/go';
// import { SlLocationPin } from 'react-icons/sl';

// const JobCardSwiper = ({ recentJobs }) => {

//     const CustomDot = ({ onClick, active }) => (
//         <button
//           onClick={onClick}
//           className={`w-8 h-1 mx-1 ${
//             active ? 'bg-blue-500' : 'bg-gray-300'
//           } transition-all duration-300 ease-in-out`}
//         />
//       );

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     customPaging: (i) => <CustomDot />,
//     dotsClass: "slick-dots slick-thumb custom-dot-class",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="py-14">
//         <Slider {...settings}>
//       {recentJobs.map((job) => (
//         <div key={job._id} className="px-2">
//           <div className='rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-8 mx-auto mt-5'>
//             <h1 className='text-xl font-semibold'>{job.title}</h1>
//             <div className='flex gap-2 items-center mt-4'>
//               <GoClock className='icon-color' size={20} />
//               <p className='text-gray-600'>Posted 24 hours ago</p>
//             </div>
//             <div className='flex justify-between mt-4'>
//               <div className='rounded px-1 py-1 bg-[#0DCAF01F]'>
//                 <p className='text-[#0dcaf0] text-xs'>{job.employmentType}</p>
//               </div>
//               <div>
//                 <p>{job.salary}</p>
//               </div>
//             </div>
//             <hr className='mt-4' />
//             <div className='flex items-center gap-4 mt-4'>
//               <div className='flex justify-center items-center p-2 rounded shadow-md'>
//                 <Image src={job.logoUrl} width={35} height={55} alt='Company logo' />
//               </div>
//               <div>
//                 <h1 className='text-lg font-semibold'>{job.company}</h1>
//                 <div className='flex items-center gap-2'>
//                   <SlLocationPin className='text-gray-600' />
//                   <p className='text-gray-600'>{job.location}</p>
//                 </div>
//               </div>
//             </div>
//             <div className='mt-7'>
//               <Link href={`/joblist/${job._id}`} className='btn-color text-white p-2 px-6 rounded-lg hover:bg-[#01c0e6] ease-in-out duration-500'>
//                 Apply Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//     <style jsx>{`
//         .custom-dot-class {
//           position: absolute;
//           bottom: -30px;
//           display: flex !important;
//           justify-content: center;
//           width: 100%;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default JobCardSwiper; 

import { IoChevronForwardOutline } from 'react-icons/io5';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import { GoClock } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
import { useRef } from 'react';

const JobCardSwiper = ({ recentJobs }) => {
  console.log(recentJobs);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove default arrows
  };

  const sliderRef = useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="py-14 relative">
      <Slider ref={sliderRef} {...settings}>
        {recentJobs.map((job) => (
          <div key={job._id} className="px-2 relative">
            <div className='rounded-t-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-6 py-8 mx-auto mt-5'>
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
            
            {/* Next button */}
            <button 
              onClick={goToNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <IoChevronForwardOutline size={24} />
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobCardSwiper; 