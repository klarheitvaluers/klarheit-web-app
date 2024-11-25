"use client"
import Landing from '@/components/landing/Landing'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Dashboard = () => {
  const router = useRouter();

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

  return (
    <div className='flex justify-center items-center h-[60vh] w-full flex-col'>
    <Landing/>
    <h2 className='mb-5'>You are logged in as an <span className='text-orange'> Admin</span></h2>
    <ul className='flex gap-16 text-sm text-gray-200 list-disc'>
      <div className='flex flex-col gap-2'>
      <li>Ckeckout new contacts.</li>
      <li>View job applicants.</li>
      </div>
      <div className='flex flex-col gap-2'>
      <li>Update the existing job opportunities.</li>
      <li>Post new job listing.</li>
      </div>
      </ul>
    </div>
  )
}

export default Dashboard;