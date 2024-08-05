import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import Loader from "@/components/loader/Loader";
import SuccessModal from "@/components/modals/SuccessModal";
import Cookies from "js-cookie";

const Contact = () => {
  const firstName = Cookies.get("firstName");
  const userEmail = Cookies.get("userEmail");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState()
  const [show, setShow] = useState(false)

  const headerText = "Message recieved!"
  const path = "contact"

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsLoading(true)
      const res = await axios.post('/api/contactus', data)
      console.log(res);
      reset()
      setShow(true)
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <>
    <SuccessModal show={show} setShow={setShow} headerText={headerText} path={path}/>
      <div className="">
        <div className="w-full z-10 ">
          <div className="contact-bg flex flex-col justify-center items-center  h-36 lg:h-64 text-white ">
            <h1 className="text-2xl lg:text-4xl">Get In Touch With Us</h1>
            <h2 className="text-lg lg:text-xl">We want to hear from you</h2>
          </div>
        </div>
        <div className=" w-4/5 lg:w-2/3 mx-auto z-20 -mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#DBF7FD] rounded-lg py-8 px-7 flex flex-col  gap-3 xl:gap-10 xl:px-0"
          >
            <div className="flex flex-col gap-3 xl:gap-10 justify-between ">
              <div className="flex flex-col lg:flex-row gap-3 xl:gap-10 w-full mx-auto lg:w-11/12 justify-center items-center">
                <div className="flex flex-col w-full">
                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    type="text"
                    defaultValue={firstName}
                    placeholder="Name*"
                    className="w-full outline-none h-11 text-sm px-2 rounded-lg border border-red-600"
                  />
                  {errors.name && (
                    <p className="text-red-500 ">{errors.name.message}</p>
                  )}
                </div>

                <div className="flex flex-col w-full">
                  <input
                    {...register("email", {
                      required: "Email Address is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="text"
                    defaultValue={userEmail}
                    placeholder="Email*"
                    className="w-full outline-none h-11 text-sm px-2 rounded-lg border"
                  />
                  {errors.email && (
                    <p className="text-red-500 ">{errors.email.message}</p>
                  )}
                </div>

              </div>
              <div className="flex flex-col lg:flex-row gap-3 xl:gap-10 lg:gap-5 w-full mx-auto lg:w-11/12 justify-center items-center">
               <div className="flex flex-col w-full">
               <input
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                    pattern: {
                      value:
                        /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/, // Regex pattern to accept only numbers
                      message:
                        "Invalid phone number. Please enter only digits.",
                    },
                  })}
                  type="text"
                  placeholder="Phone number*"
                  className="w-full outline-none h-11 text-sm px-2 rounded-lg border"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 ">{errors.phoneNumber.message}</p>
                )}
               </div>
              <div className="flex flex-col w-full">
              <input
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  type="text"
                  placeholder="Subject*"
                  className="w-full outline-none h-11 text-sm px-2 rounded-lg border"
                />
                {errors.subject && (
                  <p className="text-red-500 ">{errors.subject.message}</p>
                )}
              </div>
              </div>
            </div>
            <div className="flex justify-center w-full items-center lg:w-11/12 mx-auto">
             <div className="flex flex-col w-full">
             <textarea
                {...register("message", {
                  required: "Message is required",
                })}
                rows={7}
                cols={104}
                placeholder="Message*"
                className=" rounded-lg px-2 text-sm py-1 border outline-none"
              />
              {errors.message && (
                <p className="text-red-500 ">{errors.message.message}</p>
              )}
             </div>
            </div>

            <div className="w-full lg:w-11/12 mx-auto">
              <button className="bg-[#0DCAF0] text-white py-2 rounded-xl w-full hover:bg-cyan-500 hover:text-white ease-in-out duration-500">
                {isLoading ? <Loader text={"please wait..."}/> : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col lg:flex-row w-4/5 mx-auto gap-10 lg:gap-14 justify-center items-center my-10 py-11 ">
          <div className="box text-center w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-4">
            <div className="flex justify-center items-center">
              <Image src="/Frame117.png" width={100} height={100} alt="image" />
            </div>
            <div className="mt-3">
              <h1 className="text-xl font-bold">Call Us</h1>
              <p className="font-medium text-sm mt-2">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-[#0dcaf0] mt-1">+44567890239</p>
            </div>
          </div>

          <div className="box text-center w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-4">
            <div className="flex justify-center items-center">
              <Image src="/Frame119.png" width={100} height={100} alt="image" />
            </div>
            <div className="mt-3">
              <h1 className="text-xl font-bold">Email Us</h1>
              <p className="font-medium text-sm mt-2">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-[#0dcaf0] mt-1">Commando22@gmail.com</p>
            </div>
          </div>

          <div className="box text-center w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg py-4">
            <div className="flex justify-center items-center">
              <Image src="/Frame120.png" width={100} height={100} alt="image" />
            </div>
            <div className="mt-3">
              <h1 className="text-xl font-bold">Location</h1>
              <p className="font-medium text-sm mt-2">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-[#0dcaf0] mt-1">
                23 shinghai street Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
