'use client'
import logout from '../../../utils/logout'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function UserDetailModal({open, setOpen}) {

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="absolute top-20 right-[5%]  transform overflow-hidden rounded-lg  bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xs data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
              <div className='flex flex-col justify-center items-center p-4 gap-4'>
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                   Account Information
                  </DialogTitle>
              </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}