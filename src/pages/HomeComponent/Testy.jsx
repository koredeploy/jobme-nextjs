import React from "react";
import Image from "next/image";
import { testimonial } from "../../../data/testimonial";
import TestimonialSwiper from "@/components/TestimonialSwiper";

const Testy = () => {
  return (
    <div className="container w-11/12 mx-auto py-16">
      <div className="text-center ">
        <h1 className="text-lg text-[#0dcaf0]">Testimonials</h1>
        <h1 className="text-2xl font-semibold">Feedbacks from clients</h1>
      </div>
      <div className=" hidden lg:grid grid-cols-3 gap-12">
        {testimonial.map((testy) => (
          <div
            key={testy.id}
            className=" flex flex-col justify-center items-center mx-auto rounded-md mt-6 px-5 py-6 bg-[#F5F3F399]  "
          >
            <div className=" flex flex-col gap-4 justify-center items-center text-center">
              <Image
                src={testy.profileImage}
                width={100}
                height={100}
                alt="profile picture"
              />

              <p className="text-lg w-full lg:w-4/5 mx-auto">{testy.text}</p>

              <div className="pt-4">
                <h1 className="text-lg text-[#0dcaf0]">{testy.name}</h1>

                <h1>{testy.country}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="block lg:hidden ">
        <TestimonialSwiper/>
      </div>
    </div>
  );
};

export default Testy;
