// import React, { useContext } from 'react';
// import AppContext  from '../../../context/AppContext'
// import { jobType, mode, industry, location } from '../../../data/filterJobs';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/router';

// const DropDown = () => {
//   const router = useRouter()
//   const {
//     selectedJobType,
//     setSelectedJobType,
//     selectedIndustry,
//     setSelectedIndustry,
//     selectedMode,
//     setSelectedMode,
//     selectedLocation,
//     setSelectedLocation,
//   } = useContext(AppContext);
// const showHero = router.pathname == "/joblist" ? "block" :"hidden"
//   return (
//    <>
//     <Image src="/joblist-hero.svg" alt='hero-img' width={100} height={100} className={`${showHero} w-full h-full`} />
//     <div className='section-2 py-8 flex items-center'>

//       <form className="container w-10/12 mx-auto">
//         <div className="grid items-center grid-cols-2 md:grid-cols-5 gap-10 justify-between">
//           <div className="relative w-full">
//             <select
//               value={selectedJobType}
//               onChange={(e) => setSelectedJobType(e.target.value)}
//               className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//             >
//               <option value="">Select Job Type</option>
//               {jobType.map((type, i) => (
//                 <option key={i} value={type}>{type}</option>
//               ))}
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
//         <svg class="-mr-1 h-5 w-5 text-gray-950" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//         <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//       </svg>
//       </div>
//           </div>

//           <div className="relative w-full">
//             <select
//               value={selectedIndustry}
//               onChange={(e) => setSelectedIndustry(e.target.value)}
//               className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//             >
//               <option value="">Select Industry</option>
//               {industry.map((type, i) => (
//                 <option key={i} value={type}>{type}</option>
//               ))}
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
//         <svg class="-mr-1 h-5 w-5 text-gray-950" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//         <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//       </svg>
//       </div>
//           </div>

//           <div className="relative w-full">
//             <select
//               value={selectedMode}
//               onChange={(e) => setSelectedMode(e.target.value)}
//               className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//             >
//               <option value="">Select Mode of Work</option>
//               {mode.map((m, i) => (
//                 <option key={i} value={m}>{m}</option>
//               ))}
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
//         <svg class="-mr-1 h-5 w-5 text-gray-950" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//         <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//       </svg>
//       </div>
//           </div>

//           <div className="relative w-full">
//             <select
//               value={selectedLocation}
//               onChange={(e) => setSelectedLocation(e.target.value)}
//               className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
//             >
//               <option value="">Select Location</option>
//               {/* Populate locations dynamically if you have a list */}
//               {location.map((type, i) => (
//                 <option key={i} value={type}>{type}</option>
//               ))}
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
//         <svg class="-mr-1 h-5 w-5 text-gray-950" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//         <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//       </svg>
//       </div>
//           </div>

//           <div className="hidden md:flex items-center justify-center">
//             {/* Conditional rendering for the button */}
//             <Link href="/joblist">
//               <button className="bg-cyan-500 text-white py-3 px-6 rounded-md font-semibold">Find Jobs</button>
//             </Link>
//           </div>
//         </div>
//         <div className=" flex md:hidden mt-4  items-center justify-center">
//             {/* Conditional rendering for the button */}
//             <Link className='w-full' href="/joblist">
//               <button className="bg-cyan-500 w-full text-white py-3 px-6 rounded-md font-semibold">Find Jobs</button>
//             </Link>
//           </div>
//       </form>
//     </div>
//    </>
//   );
// }

// export default DropDown;

import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { jobType, mode, industry, location } from "../../../data/filterJobs";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const DropDown = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);
  console.log("====================================");
  console.log(state);
  console.log("====================================");
  const showHero = router.pathname == "/joblist" ? "block" : "hidden";

  // const handleChange = (type, value) => {
  //   dispatch({ type: `set${type}`, payload: value });
  // };
  const handleChange = (type, value) => {
    console.log(`Changing ${type} to ${value}`);
    dispatch({ type: `set${type}`, payload: value });
  };

  return (
    <>
      <Image
        src="/joblist-hero.svg"
        alt="hero-img"
        width={100}
        height={100}
        className={`${showHero} w-full h-full`}
      />
      <div className="section-2 py-8 flex items-center">
        <form className="container w-10/12 mx-auto">
          <div className="grid items-center grid-cols-2 md:grid-cols-5 gap-10 justify-between">
            <div className="relative w-full">
              <select
                value={state.selectedJobType}
                onChange={(e) => handleChange("JobType", e.target.value)}
                onBlur={(e) => handleChange("JobType", e.target.value)}
                className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="">Select Job Type</option>
                {jobType.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {/* ... dropdown arrow ... */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                <svg
                  class="-mr-1 h-5 w-5 text-gray-950"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-full">
              <select
                value={state.selectedIndustry}
                onChange={(e) => handleChange("Industry", e.target.value)}
                onBlur={(e) => handleChange("Industry", e.target.value)}
                className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="">Select Industry</option>
                {industry.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* ... dropdown arrow ... */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                <svg
                  class="-mr-1 h-5 w-5 text-gray-950"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-full">
              <select
                value={state.selectedMode}
                onChange={(e) => handleChange("Mode", e.target.value)}
                onBlur={(e) => handleChange("Mode", e.target.value)}
                className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="">Select Mode of Work</option>
                {mode.map((m, i) => (
                  <option key={i} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              {/* ... dropdown arrow ... */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                <svg
                  class="-mr-1 h-5 w-5 text-gray-950"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-full">
              <select
                value={state.selectedLocation}
                onChange={(e) => handleChange("Location", e.target.value)}
                onBlur={(e) => handleChange("Location", e.target.value)}
                className="form-select block appearance-none w-full py-3 pl-4 pr-10 rounded-md text-lg capitalize leading-tight bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="">Select Location</option>
                {location.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {/* ... dropdown arrow ... */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                <svg
                  class="-mr-1 h-5 w-5 text-gray-950"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            
            <div className="hidden md:flex items-center justify-center">
              {/* Conditional rendering for the button */}
              <Link href="/joblist">
                <button className="bg-cyan-500 text-white py-3 px-6 rounded-md font-semibold">
                  Find Jobs
                </button>
              </Link>
            </div>
          </div>
          {/* ... mobile button ... */}
          <div className=" flex md:hidden mt-4  items-center justify-center">
            {/* Conditional rendering for the button */}
            <Link className="w-full" href="/joblist">
              <button className="bg-cyan-500 w-full text-white py-3 px-6 rounded-md font-semibold">
                Find Jobs
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default DropDown;
