"use client"
import JobListingCard from '@/components/admin/JobListingCard'
import { Job } from '@/types/job'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Joblisting = () => {
  // fetch jobs posted from database and map these cards
  const [jobs,setJobs] = useState<Job[]>([])
  const router = useRouter()

  useEffect(() => {
    axios.get("/api/validate", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => console.log(res.data))
    .catch((err) => {
      router.push('/admin/login');
      console.log(err);
    });
  }, []);

  useEffect(()=>{
    axios.get("/api/job")
    .then(res=>setJobs(res.data))
    .catch((error)=>console.log(error))
  },[])

  return (
    <div className='flex flex-wrap justify-center items-center gap-7'>
      {
        jobs.map((element,index)=><JobListingCard _id={element._id} date={element.date} key={index} position={element.position} description={element.description} location={element.location} salary={element.salary} jobID={element.jobID} skills={element.skills}/>)
      }
    </div>
  )
}

export default Joblisting