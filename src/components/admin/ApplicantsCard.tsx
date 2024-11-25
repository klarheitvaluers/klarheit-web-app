"use client"
import { FinalApplicant } from '@/types/finalApplicant'
import { useRouter } from 'next/navigation'
import React from 'react'

const ApplicantsCard = ({name,email,pdfUrl,jobID}:FinalApplicant) => {
    const router = useRouter()
    
    const downloadResume = ()=>{
        router.push(pdfUrl)
    }

  return (
    <div className='w-2/5 h-48 hover:shadow-gray-500 bg-black hover:shadow-md border border-gray-400 border-1 rounded-md pl-7 pr-8 pt-5 pb-5'>
        <div className='flex flex-row justify-between mb-2'>
        <p className='text-xl text-orange'>{name}</p>
        </div>
        <div className='flex flex-row gap-2 mb-2'>
            <p className='text-sm text-gray-400'>Job ID: {jobID}</p>
        </div>
        <div className='flex flex-col justify-between gap-5'>
        <p className='text-wrap text-sm'>{email}</p>
        <button className='p-2 mt-1 bg-orange text-sm rounded-sm w-48' onClick={downloadResume}>Download Resume</button>
        </div>
    </div>
  )
}

export default ApplicantsCard