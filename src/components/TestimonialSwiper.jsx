
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { SlLocationPin } from 'react-icons/sl';
import { useRef } from 'react';
import { testimonial } from '../../data/testimonial';

const TestimonialSwiper = ({ recentJobs }) => {

  const settings = {
    dots: true,
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
    <div className=" relative">
      <Slider ref={sliderRef} {...settings}>
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
      </Slider>
    </div>
  );
};

export default TestimonialSwiper; 