import { Job } from '@/types/job'
import React from 'react'

const JobListingCard = ({position,location,salary,jobID,skills,description}:Job) => {
  return (
    <div className='w-2/5 h-48 hover:shadow-gray-500 bg-black hover:shadow-md border border-gray-400 border-1 rounded-md pl-7 pr-8 pt-5 pb-5'>
        <div className='flex flex-row justify-between mb-2'>
        <p className='text-xl text-orange'>{position}</p>
        <p className='text-sm text-gray-400'>Date posted</p>
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
        <button className='bg-orange p-3 rounded-[36px]'>Delete</button>
        </div>
    </div>
  )
}

export default JobListingCard