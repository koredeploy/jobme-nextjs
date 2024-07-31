"use client";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

const UpdateStatusModal = ({ job, show, setShow, handleUpdateStatus }) => {
  const updateStatus = (newStatus) => {
    handleUpdateStatus(job.applicationId, newStatus);
  };

  return (
    <Dialog open={show} onClose={() => setShow(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-50" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start w-full">
                <div className="w-full mt-3 text-left sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="flex justify-between items-start text-base font-semibold leading-6 text-gray-900">
                    Update Your Application Status
                    <Image
                      onClick={() => setShow(false)}
                      src="/close-modal.svg"
                      alt="Close"
                      width={20}
                      height={30}
                    />
                  </DialogTitle>
                  <p className="mb-4">Only you can see this!</p>
                  <div className="my-3 cursor-pointer" onClick={() => updateStatus("Applied")}>
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image src="/Applied.svg" alt="Applied" width={25} height={25} />
                      Applied
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3 cursor-pointer" onClick={() => updateStatus("Interviewing")}>
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image src="/Interviewing.svg" alt="Interviewing" width={25} height={25} />
                      Interviewing
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3 cursor-pointer" onClick={() => updateStatus("Received offer")}>
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image src="/received-offer.svg" alt="Received offer" width={25} height={25} />
                      Received offer
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3 cursor-pointer" onClick={() => updateStatus("Hired")}>
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image src="/hired.svg" alt="Hired by employer" width={25} height={25} />
                      Hired by employer
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3 cursor-pointer" onClick={() => updateStatus("Not hired")}>
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image src="/not-hired.svg" alt="Not hired by employer" width={25} height={25} />
                      Not hired by employer
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3 cursor-pointer" onClick={() => updateStatus("No longer interested")}>
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image src="/no-longer-interested.svg" alt="No longer interested" width={25} height={25} />
                      No longer interested
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateStatusModal;
