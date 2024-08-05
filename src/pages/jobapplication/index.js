import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/loader/Loader";
import axios from "axios";
import Cookies from "js-cookie";
import withAuth from "@/components/hoc/withAuth";
import SuccessModal from "@/components/modals/SuccessModal";
const JobApplication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const userId = Cookies.get("userId");
  const firstName = Cookies.get("firstName");
  const lastName = Cookies.get("lastName");
  const userEmail = Cookies.get("userEmail");
  const jobId = Cookies.get("jobId");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const router = useRouter();
  // const { jobId } = router.query
  console.log(userId);
  console.log(jobId);

  const headerText = "Application Successful!";
  const path = "application";

  const onSubmit = async (data) => {
    if (!userId || !jobId) {
      console.error("User or job ID not available");
      return;
    }

    setLoading(true);
    setFormError(""); // Clear any previous error messages

    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("jobId", jobId);
      formData.append("firstName", data.firstname);
      formData.append("lastName", data.lastname);
      formData.append("email", data.email);
      formData.append("phoneNumber", data.phone);
      formData.append("coverLetter", data.coverLetter);
      formData.append("resume", data.resume[0]); // Assuming resume is a FileList

      const response = await axios.post(
        "/api/jobs/submitapplication",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Application submitted successfully:", response.data);

      // You can add a success message or redirect the user here
      setShowSuccess(true);
      router.push("/appliedjobs"); // Redirect to a success page
    } catch (error) {
      console.error(
        "Error submitting application:",
        error.response?.data?.message || error.message
      );
      // Set the error message to formError state
      setFormError(
        error.response?.data?.message ||
          "An error occurred while submitting your application. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <SuccessModal
        show={showSuccess}
        setShow={setShowSuccess}
        path={path}
        headerText={headerText}
      />
      <div className="mt-1 mb-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-[#DBF7FD] container lg:w-8/12 mx-auto justify-center items-center  text-gray-500 text-left rounded-lg p-2 py-4"
        >
          <div className=" lg:w-11/12 lg:mt-5 mx-auto">
            {formError && (
              <p className="text-red-500 font-semibold ">{formError}</p>
            )}
            {/* BREAKPOINT ONE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 md:mt-4">
              <div>
                <p>First name*</p>
                <input
                  {...register("firstname", {
                    required: " Firstname is required",
                  })}
                  className="w-full lg:text-sm m-auto px-2 py-3 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="text"
                  placeholder=""
                  id="firstname"
                  defaultValue={firstName}
                  autoComplete="given-name"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-left -mt-3">
                    {errors.firstname.message}
                  </p>
                )}
              </div>

              <div>
                <p>Last name*</p>
                <input
                  {...register("lastname", {
                    required: " Lastname is required",
                  })}
                  className="w-full lg:text-sm m-auto px-2 py-3 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="text"
                  placeholder=""
                  id="lastname"
                  defaultValue={lastName}
                  autoComplete="family-name"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-left -mt-3">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>
            {/* BREAKPOINT TWO */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-center lg:gap-8 lg:mt-5">
              <div>
                <p>Email address*</p>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full lg:text-sm m-auto px-2 py-3 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="email"
                  defaultValue={userEmail}
                  placeholder=""
                  id="email"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-left -mt-3">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <p>Phone number*</p>
                <input
                  {...register("phone", {
                    required: "Your phone number is required",
                    pattern: {
                      value:
                        /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/, // Regex pattern to accept only numbers
                      message:
                        "Invalid phone number. Please enter only digits.",
                    },
                  })}
                  className="w-full lg:text-sm m-auto px-2 py-3 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500"
                  type="tel"
                  placeholder=""
                  id="phone"
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="text-red-500 text-left -mt-3">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            {/* TEXT AREA */}
            <p>Cover letter*</p>
            <div className="w-full lg:text-sm m-auto px-2 py-3 lg:py-2 mb-3 text-black bg-white border border-gray-400 rounded-md lg:rounded-lg placeholder:text-gray-400 outline-gray-500">
              <textarea
                {...register("coverLetter", {
                  required: "Your cover letter is required",
                })}
                name="coverLetter"
                id="coverLetter"
                className="w-full h-32 lg:h-24 outline-none"
                placeholder=""
                autoComplete="off"
              ></textarea>
              {errors.coverLetter && (
                <p className="text-red-500 text-left -mt-6">
                  {errors.coverLetter.message}
                </p>
              )}
            </div>
            {/* AGREE & UPLOAD DOC */}
            <div className="container mt-6">
              <p className="">Upload CV/Resume*</p>
             
              <input
                {...register("resume", {
                  required: "Please upload a file",
                })}
                type="file"
                id="resume"
                placeholder="No file chosen"
                className="container mt-2 outline-none bg-white lg:w-6/12 rounded-xl border-none file:mr-4  file:px-4 file:rounded-l-xl file:border-0 file:py-3 file:text-sm file:font-semibold file:bg-gray-300 file:text-gray-900 hover:file:bg-gray-400 border-2 border-gray-300"
              />
              {errors.resume && (
                <p className="text-red-500 text-start ">
                  {errors.resume.message}
                </p>
              )}
              <div className="font-semibold text-black mt-2 ">
                <p className="">File type should not be larger than 12MB.</p>
                <p className="">Supported file types: doc, docx, pdf.</p>
              </div>
            </div>
            <div className="container mb-4">
              <input defaultChecked type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="ml-1">
                I agree to the
                <span className="text-[#0dcaf0]"> Terms & Conditions</span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="container justify-center items-center btn w-48 font-light bg-[#0dcaf0] mx-auto rounded-md text-center lg:rounded-lg p-2 text-white lg:text-lg "
              disabled={loading}
            >
              {loading ? <Loader text={"please wait..."} /> : "Apply Now"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default withAuth(JobApplication);

