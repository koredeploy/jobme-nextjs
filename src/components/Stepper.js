import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const Stepper = () => {

  const steps = [
    {  image:'https://res.cloudinary.com/doejcrfso/image/upload/v1721009778/jobme/step-one-icon_f7sxq7.png', text: 'Create account' },
    {  image:'https://res.cloudinary.com/doejcrfso/image/upload/v1721009778/jobme/step-two-icon_birnsw.png', text: 'Complete your profile' },
    {  image:'https://res.cloudinary.com/doejcrfso/image/upload/v1721009778/jobme/step-three-icon_w4csrc.png', text: 'Find best Jobs' },
    { image:'https://res.cloudinary.com/doejcrfso/image/upload/v1721009778/jobme/step-four-icon_isagqv.png', text: 'Apply for Jobs' },
  ];

  return (
    <div className="w-11/12 lg:w-10/12 container mx-auto py-6">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-8">How It Works?</h2>
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 p-2 lg:w-24 lg:h-24 rounded-md flex items-center justify-center  bg-cyan-100`}>
                <Image src={step.image} alt={step.text} width={50} height={50} />
              </div>
           <div className='min-h-8'>
           <p className="mt-3 text-sm font-medium md:text-xl text-center max-w-[90px] lg:max-w-[200px]">{step.text}</p>
           </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 w-[75%] md:w-[85%] xl:w-[92%]  h-0.5 absolute right-0 left-14 -z-20 -translate-y-4  bg-cyan-500`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;



