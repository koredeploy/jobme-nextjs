"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Loader from "@/components/loader/Loader";

import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [signinError, setSigninError] = useState("");
  const [show, setShow] = useState(false);

  const toggleEye = () => {
    setShow(!show);
  };
  const passwordType = show ? "text" : "password";

  // const {setUserName, setUserEmail} = useContext(AppContext)
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      // setUserId(responseData.user.id)
      if (res.ok) {
        setIsLoading(false);
        setSigninError("");
        console.log("login successful:", responseData);
        // setUserId
        console.log(responseData.user.id);
        Cookies.set("userId", responseData.user.id);
        Cookies.set("userEmail", responseData.user.email);
        Cookies.set("firstName", responseData.user.firstname);
        Cookies.set("lastName", responseData.user.lastname);
        Cookies.set("token", responseData.token, {
          expires: 1,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });
        reset();
        router.push("/");
      } else {
        setIsLoading(false);
        console.error("login failed:", responseData);
        setSigninError(responseData.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("An error occured:", error);
    }
  };

  return (
    <div className="log-bg flex justify-center items-center mx-auto py-10">
      <div className="bg-[#ffffffe7] w-full md:w-8/12 lg:w-6/12 py-10 rounded-3xl">
        <div className="w-10/12 md:w-9/12 lg:w-10/12 xl:w-8/12 mx-auto  my-auto">
          <div className="flex justify-center mx-auto">
            <Link href="/">
              <Image
                src="/JOBME-LOGO.svg"
                width={75}
                height={75}
                alt="home logo"
              />
            </Link>
          </div>

          <div className="text-center mt-5">
            <h1 className="text-lg font-semibold">Welcome back!</h1>
            <h2 className="text-base font-medium mt-2">
              Log In to hit your dream job!
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-7 gap-6"
          >
            {signinError && (
              <p className="text-red-500 font-bold">{signinError}</p>
            )}
            <div className="w-full border rounded-lg bg-transparent">
              <input
                 {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email Address"
                className="w-full p-2 rounded-lg bg-transparent outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <div className="w-full border relative rounded-lg bg-transparent">
              <input
                {...register("password", { required: "Password is required" })}
                type={`${passwordType}`}
                placeholder="Password"
                className="w-full p-2 rounded-lg bg-transparent outline-none"
              />
             
              {show ? (
                 <button type="button" onClick={toggleEye} className="text-gray-400 absolute right-3 translate-y-3 ">
                   <IoEye  />
                 </button>
              ) : (
                <button type="button" onClick={toggleEye} className="text-gray-400 absolute right-3 translate-y-3">
               <IoEyeOff  />
              </button>
               
              )}
            </div>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <div className="grid grid-cols-2 items-center justify-between ">
              <div className="flex justify-start items-center gap-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <Link
                href="#"
                className=" flex justify-end text-[#0dcaf0] hover:text-black"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn-color rounded-lg text-white mt-2 py-2 w-full hover:bg-cyan-400 hover:text-white"
            >
              {!isLoading ? <p>Login</p> : <Loader text="please wait..." />}
            </button>
          </form>
          <div className="flex flex-col mt-8 gap-2 justify-center items-center">
            <div>
              <p>Or continue with</p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/fblogo.png"
                width={25}
                height={25}
                alt="facebook logo"
              />
              <Image
                src="/gmaillogo.png"
                width={25}
                height={25}
                alt="gmail logo"
              />
              <Image
                src="/linklogo.png"
                width={25}
                height={25}
                alt="linkdln logo"
              />
            </div>

            <div>
              <p>
                Already have an account?{" "}
                <span>
                  {" "}
                  <Link
                    href="/signup"
                    className="text-[#0dcaf0] hover:text-black"
                  >
                    Sign up
                  </Link>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

//       <div className="flex flex-col mt-8 gap-2 justify-center items-center">
//         <div>
//           <p>Or continue with</p>
//         </div>
//         <div className="flex gap-2">
//           <Image
//             src="/fblogo.png"
//             width={25}
//             height={25}
//             alt="facebook logo"
//           />
//           <Image
//             src="/gmaillogo.png"
//             width={25}
//             height={25}
//             alt="gmail logo"
//           />
//           <Image
//             src="/linklogo.png"
//             width={25}
//             height={25}
//             alt="linkdln logo"
//           />
//         </div>

//         <div>
//           <p>
//             Don’t have an account?{" "}
//             <span>
//               {" "}
//               <Link
//                 href="/signup"
//                 className="text-[#0dcaf0] hover:text-black"
//               >
//                 Sign Up
//               </Link>
//             </span>{" "}
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
