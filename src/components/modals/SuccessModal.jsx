"use client";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function SuccessModal({ show, setShow, headerText, path }) {
  //   const [open, setOpen] = useState(true);

  return (
    <Dialog open={show} onClose={setShow} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full  justify-center p-4 items-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in w-full sm:my-8 sm:w-full sm:max-w-lg  lg:w-[400px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
              <div className="sm:flex sm:items-start">
                <div className=" flex flex-col justify-center items-center mx-auto w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className=" text-base font-semibold leading-6 text-gray-900 "
                  >
                    {headerText}
                  </DialogTitle>
                  <div className=" flex justify-center items-center mx-auto mt-4 ">
                    <Image
                      src="/successmodal.png"
                      alt="my profile icon"
                      width={80}
                      height={70}
                    />
                  </div>
                </div>
              </div>
            </div>

            {path === "contact" ? (
              <Link
                href="/"
                onClick={() => setShow(false)}
                className="flex justify-center items-center mb-4 "
              >
                Navigate to Homepage
              </Link>
            ) : (
              <Link
                href="/joblist"
                onClick={() => setShow(false)}
                className="flex justify-center items-center mb-4 "
              >
                Proceed back to job listing
              </Link>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
