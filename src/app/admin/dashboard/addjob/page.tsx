"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const PostJob = () => {
  const router = useRouter()
  const [newjob,setNewJob] = useState({
    position:"",
    description:"",
    location:"",
    skills:"",
    salary:0,
    jobID:"",
  })

  useEffect(() => {
    axios.get("/api/validate", {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })
    .then((res) => console.log(res.data))
    .catch((err) => {
      router.push('/admin/login');
      console.log(err);
    });
  }, []);

  const addJob = async ()=>{
    // job validation - zod
    // send post request to backend /api/job
    try{
      // add toast
      const currentDate = new Date();

// Get the day, month, and year
  const day = currentDate.getDate().toString().padStart(2, '0'); 
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
const year = currentDate.getFullYear();

// Format the date as DD-MM-YYYY
const formattedDate = `${day}-${month}-${year}`;

      const result = await axios.post("/api/job",{newjob,formattedDate},{
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
      })
      toast.success("Added a new job listing to database")
      console.log(result)
    }catch(error){
      console.log(error)
      toast.error("Job posting not added, try again")
    }
  }

  return (
    <div className='h-[80vh] flex justify-center items-center'>
        <div className='flex flex-col rounded-[36px] border-gray-500 border-2 p-8'>
            <h3 className='text-2xl mb-5 text-center underline underline-offset-8'>Add a new job opportunity</h3>
            <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Job Position
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-black dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="Example: HR Manager"
                  required
                  onChange={(e)=>setNewJob({...newjob,position:e.target.value})}
                />
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Job Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="bg-gray-50 mb-3  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-black dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="A few lines about the job.."
                  required
                  onChange={(e)=>setNewJob({...newjob,description:e.target.value})}
                />
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Job Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="bg-gray-50 mb-3  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-black dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="Example: Bangalore, India"
                  required
                  onChange={(e)=>setNewJob({...newjob,location:e.target.value})}
                />
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Skills required
                </label>
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  className="bg-gray-50 mb-3  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-black dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="Example: MS Excel"
                  required
                  onChange={(e)=>setNewJob({...newjob,skills:e.target.value})}
                />
                <div className='flex gap-5'>
                  <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Salary offered
                </label>
                <input
                  type="number"
                  name="salary"
                  id="salary"
                  className="bg-gray-50 mb-3  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-black dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="CTC"
                  required
                  onChange={(e)=>setNewJob({...newjob,salary:parseInt(e.target.value)})}
                />
                </div>
                <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Job ID
                </label>
                <input
                  type="text"
                  name="jobID"
                  id="jobID"
                  className="bg-gray-50 mb-3  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-black dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange dark:focus:border-orange"
                  placeholder="####"
                  required
                  onChange={(e)=>setNewJob({...newjob,jobID:e.target.value})}
                /></div>
                  </div>
            <button className='p-2 mt-1 bg-orange text-sm rounded-sm w-28' onClick={addJob}>Add</button>        
        </div>
        <Toaster/>
    </div>
  )
}

export default PostJob