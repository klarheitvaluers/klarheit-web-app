"use client"
import JobCards from '@/components/careers/JobCards'
import { Job } from '@/types/job'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Careers = () => {
    // fetch the job listings from database and map the cards
    const [jobs,setJobs] = useState<Job[]>([])

    useEffect(()=>{
      axios.get("/api/job")
      .then(res=>setJobs(res.data))
      .catch((error)=>console.log(error))
    },[])

  return (
    <div className='flex flex-wrap justify-center items-center gap-7'>
      {
        jobs.map((element,index)=><JobCards key={index} position={element.position} description={element.description} location={element.location} salary={element.salary} jobID={element.jobID} skills={element.skills}/>)
      }
    </div>
  )
}

export default Careers