"use client"
import ApplicantsCard from '@/components/admin/ApplicantsCard'
import { FinalApplicant } from '@/types/finalApplicant'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Applicants = () => {
  const [applicants,setApplicants] =  useState<FinalApplicant[]>([])
  const router = useRouter()
  // fetch contacts from database and map it with these cards
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
      axios.get("/api/applicant")
      .then((res)=>setApplicants(res.data))
      .catch((error)=>console.log(error))
  },[])
  return (
    <div className='flex flex-wrap gap-7 justify-center items-center'>
      {
      applicants.map((a,index)=><ApplicantsCard key={index} name={a.name} email={a.email} pdfUrl={a.pdfUrl} jobID={a.jobID}/>)
    }
    </div>    
  )
}

export default Applicants