import { Job } from '@/types/job'
import axios from 'axios'
import React from 'react'
import toast, {Toaster} from 'react-hot-toast'

const JobListingCard = ({_id,position,location,salary,jobID,skills,description,date}:Job) => {
  console.log(date)
  const deletejob = async ()=>{
    try{
      await axios.delete("/api/job",{data:{_id}})
      toast.success("Job posting deleted successfully, refresh to see the changes!!")
    }catch(error){
      console.log(error)
      toast.error("Error in deleting the resource.")
    }    
  }

  return (
    <div className='w-2/5 h-48 hover:shadow-gray-500 bg-black hover:shadow-md border border-gray-400 border-1 rounded-md pl-7 pr-8 pt-5 pb-5'>
        <div className='flex flex-row justify-between mb-2'>
        <p className='text-xl text-orange'>{position}</p>
        <p className='text-sm text-gray-400'>Posted:{date}</p>
        </div>
        <div className='flex flex-row gap-2 mb-2'>
            <p className='text-sm text-gray-400'>{location}</p>
            <p className='text-sm text-gray-400'>|</p>
            <p className='text-sm text-gray-400'>{salary} per month</p> 
            <p className='text-sm text-gray-400'>|</p>
            <p className='text-sm text-gray-400'>{jobID}</p>
        </div>
        <div className='text-sm text-gray-400 mb-2'>{skills}</div>
        <div className='flex flex-row justify-between gap-5'>
        <p className='text-wrap text-sm'>{description}</p>
        <button className='bg-orange p-3 rounded-[36px]' onClick={deletejob}>Delete</button>
        </div>
        <Toaster/>
    </div>
  )
}

export default JobListingCard