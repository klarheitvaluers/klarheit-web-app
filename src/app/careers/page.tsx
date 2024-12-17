"use client"
import Carousel from '@/components/careers/Carousel'
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
    <div>
      <div className="text-3xl text-center mt-8">Life at Klarheit Valuers</div>      
        <Carousel/>
        <div className="text-3xl text-center mt-24">Career opportunities at KVESPL</div>
      <div className='flex flex-wrap justify-center items-center gap-7 mt-10'>
      
      {
        jobs.map((element,index)=><JobCards _id={element._id} date={element.date} key={index} position={element.position} description={element.description} location={element.location} salary={element.salary} jobID={element.jobID} skills={element.skills}/>)
      }
    </div>
    </div>
    
  )
}

export default Careers