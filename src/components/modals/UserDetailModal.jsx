'use client'
import logout from '../../../utils/logout'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Cookies from 'js-cookie'

export default function UserDetailModal({open, setOpen}) {
  const firstName = Cookies.get("fisrtName")
  const userEmail = Cookies.get("userEmail")

  // return (
  //   <Dialog open={open} onClose={setOpen} className="relative z-10">
  //     <DialogBackdrop
  //       transition
  //       className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
  //     />

  //     <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
  //       <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
  //         <DialogPanel
  //           transition
  //           className="absolute top-20 right-[5%]  transform overflow-hidden rounded-lg  bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xs data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
  //         >
  //             <div className='flex flex-col justify-center items-center p-4 gap-4'>
  //                 <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
  //                  Account Information
  //                 </DialogTitle>
  //             </div>
  //         </DialogPanel>
  //       </div>
  //     </div>
  //   </Dialog>
  // )

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className=" data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10  overflow-y-auto">
        <div className="flex relative items-end justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="absolute right-14 top-20 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 lg:w-full lg:max-w-60 h-64 "
          >
            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className=" sm:flex sm:items-start w-full">
                <div className="w-full mt-3 text-left sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className=" text-base font-semibold leading-6 text-gray-900"
                  >
                    Account Information
                  </DialogTitle>
                  <div className="my-3">
                    <p className=" flex justify-start items-center gap-2">
                      <Image
                        src="/user-icon-svg.svg"
                        alt="my profile icon"
                        width={20}
                        height={30}
                      />
                      My profile
                    </p>
                  </div>
                  <div className="my-3">
                    <p className="flex justify-start items-center gap-2">
                      <Image
                        src="/settings.svg"
                        alt="settings icon"
                        width={20}
                        height={30}
                      />
                      Settings
                    </p>
                  </div>
                  <div className="my-3">
                    <p className="flex justify-start items-center gap-2">
                      <Image
                        src="/help.svg"
                        alt="help icon"
                        width={20}
                        height={20}
                      />
                      My profile
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="flex justify-start items-center gap-2">
                    <div>
                      <Image
                        src="/profile-image.svg"
                        alt="kayla icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">{firstName}</h4>
                      <p>{userEmail}</p>
                    </div>
                  </div>
                  <hr className="border-y-[1px] border-black mt-1"/>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

