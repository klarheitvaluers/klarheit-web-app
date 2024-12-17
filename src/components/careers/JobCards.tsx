"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/public/logo.png';
import TickMark from '@/public/TickMark.svg'
import { Job } from '@/types/job';
import { Applicant } from '@/types/applicant';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

const JobCards = ({ position, description, location, salary, jobID, skills,date }: Job) => {
  const [showModal, setShowModal] = useState(false)
  const [fileUrl,setFileUrl] = useState<string | ArrayBuffer | null>("")
  const [applicantData,setApplicantData] = useState<Applicant>({
    name:"",
    email:"",
    resumePdf:null,
    jobID
  })

  const handleApplication =(e:React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    console.log(applicantData)
    // add toast
    toast.success("Application submitted successfully.")
    console.log(applicantData.resumePdf)
    const reader = new FileReader();
    reader.readAsDataURL(applicantData.resumePdf as Blob);
    reader.onloadend = () => {
      setFileUrl(reader.result)
    }

    axios.post("/api/applicant",{data:{...applicantData,fileUrl:fileUrl}},{
      headers:{
          "Authorization":localStorage.getItem("token")
      }
  })
    .then((res)=>console.log(res.data))
    .catch(error => console.log(error))
    // at last reset the state
  }
  return (
    <div className='flex flex-col h-[400px] w-[400px] rounded-[36px] border-gray-500 border-2 pl-6 pr-6 pt-3 pb-3'>
      <div className='flex h-20 items-center gap-3'>
        <div className='rounded-full bg-white w-16 h-16 flex items-center justify-center'><Image src={Logo} width={50} height={50} alt='company-logo' /></div>
        <div>
          <p className='text-lg'>Klarheit Valuers</p>
          <p className='text-sm text-gray-400'>{location}</p>
        </div>
      </div>
      <div className='text-lg text-orange mt-4'>{position}</div>
      <div className='text-sm text-gray-400 mt-2 min-h-16'>{description}</div>
      <hr className='border border-gray-600 mt-4 mb-4' />
      <div className='text-sm text-gray-100'>Salary offered : Rs.{salary}</div>
      <div className='text-sm text-gray-100'>Required skills : {skills}</div>
      <div className='text-sm text-gray-100'>Posted on : {date}</div>
      <div className='text-sm text-gray-100'>JOB-ID : {jobID}</div>
      <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className='bg-orange text-sm rounded-[36px] mt-5 p-2' onClick={() => setShowModal(true)}>Apply Now</button>
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${showModal ? "" : "hidden"} overflow-y-auto overflow-x-hidden flex fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-md`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white shadow dark:bg-black rounded-[36px] border-gray-500 border-2 p-4">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Join the team
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-black dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
                    placeholder="Example: John Doe"
                    required
                    onChange={(e)=>setApplicantData({...applicantData,name:e.target.value})}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-black dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
                    placeholder="example@gmail.com"
                    required
                    onChange={(e)=>setApplicantData({...applicantData,email:e.target.value})}
                  />
                </div>
              </div>
              {(applicantData.resumePdf == null)?  <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-black dark:border-gray-600 dark:hover:border-gray-500"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Upload your resume in .PDF format (Max-Size:10MB)
                    </p>
                  </div>
                  {/* pdf size limit check, .pdf format check */}
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={(e)=>setApplicantData({...applicantData,resumePdf:e.target.files?.[0] as File})}
                  />
                </label>
              </div>:<div className='w-full h-32 border-2 flex flex-col gap-5 justify-center items-center border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-black dark:border-gray-600 dark:hover:border-gray-500'>
                 <Image src={TickMark} width={40} height={40} alt='file-upload-completed'/>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>File upload completed</p>
                </div>}
            
              <button onClick={(e)=>handleApplication(e)}
                className="text-white mt-4 inline-flex items-center bg-orange hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Apply Now
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
<Toaster/>
    </div>
  )
}

export default JobCards