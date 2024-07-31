"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  
const [formError, setFormError]= useState("")

const onSubmit = async (data) => {
  console.log(data);
  try {
    const formData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password
    }
    console.log(formData);
    const res = await fetch("api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    console.log(res);
    const responseData = await res.json();
    console.log(responseData);
    if (res.ok) {
      reset()
      setFormError("")
      // you can add additional logic here like a toast, redirect e.t.c
    } else {
      console.error('User registration failed', responseData)
      setFormError(responseData.message)
    }
  } catch (error) {
    console.log(error, "Something went wrong");
  }
}

  return (
    <div className="sign-bg  flex justify-center items-center mx-auto py-10">
      <div className="bg-[#ffffffe7] w-full md:w-8/12 lg:w-6/12  py-5 rounded-3xl">
        <div className=" w-10/12 md:w-9/12 lg:w-10/12 xl:w-8/12 mx-auto mt-5 my-auto">
          <div className="flex justify-center mx-auto">
            <Link href="/">
              <Image src="/JOBME-LOGO.svg" width={75} height={75} alt="home logo" />
            </Link>
          </div>

          <div className="text-center mt-5">
            <h1 className="text-lg font-semibold">Sign Up!</h1>
            <h2 className="text-base font-medium mt-2">
              Register to hit your dream job!
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col mt-7 gap-6"
          >
            {formError && <p className="text-red-500 font-bold">{formError}</p>}
            <div className="w-full border rounded-lg bg-transparent">
              <input
                {...register("firstname", {
                  required: "First name is required",
                })}
                type="text"
                placeholder="First name"
                className="w-full p-2 rounded-lg bg-transparent outline-none"
              />
            </div>
            {errors.firstname && (
              <p className="text-red-500">{errors.firstname.message}</p>
            )}

            <div className="w-full border rounded-lg bg-transparent">
              <input
                {...register("lastname", { required: "Last name is required" })}
                type="text"
                placeholder="Last name"
                className="w-full p-2 rounded-lg bg-transparent outline-none"
              />
            </div>
            {errors.lastname && (
              <p className="text-red-500">{errors.lastname.message}</p>
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

            <div className="w-full border rounded-lg bg-transparent">
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "password must be at least 8 characters long",
                  },
                })}
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded-lg bg-transparent outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <div className="w-full border rounded-lg bg-transparent">
              <input
                {...register("confirmpassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
                type="password"
                placeholder="Confirm password"
                className="w-full p-2 rounded-lg bg-transparent outline-none"
              />
            </div>
            {errors.confirmpassword && (
              <p className="text-red-500">{errors.confirmpassword.message}</p>
            )}

            {/* <div className='flex justify-between -mt-4'>
              <div className='flex gap-2'>
              <input type="checkbox" />
              <p>Remember me</p>
              </div>


              <div>
              <Link href="#" className='text-[#0dcaf0] hover:text-black'>Forgot Password?</Link>
              </div>
            </div> */}

            <button
              type="submit"
              className="btn-color rounded-lg text-white mt-2 py-1 w-full hover:bg-white hover:text-black"
            >
              Sign Up
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
                    href="/login"
                    className="text-[#0dcaf0] hover:text-black"
                  >
                    Log in
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

export default SignUp;
