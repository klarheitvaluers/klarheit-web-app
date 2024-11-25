"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()

    const handlelogin = ()=>{
        // input validation

        // backend request to login the admin
        axios.post("/api/login",{admin:{username,password}})
        .then((res)=>{
          localStorage.setItem("token",`Bearer ${res.data.token}`)
          router.push("/admin/dashboard")
        })
        .catch(error => console.log(error))
        // add toasts
        // after login redirect to admin/dashboard
        // implement forgot password if required
    }
  return (
    <div className='w-screen h-[80vh] flex justify-center items-center'>
        <div className='flex flex-col rounded-[36px] border-gray-500 border-2 p-12'>
            <h3 className='text-2xl text-center underline underline-offset-8'>Login as an Admin</h3>
            <input type='text' placeholder='Enter the username' className='p-4 mt-8 text-sm text-black rounded-sm w-96' onChange={(e)=>setUsername(e.target.value)}/>
            <input type='password' placeholder='Enter the password' className='p-4 mt-8 text-sm text-black rounded-sm w-96' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handlelogin} className='p-4 mt-8 bg-orange text-sm rounded-sm w-96'>Login</button>        
        </div>
    </div>
  )
}

export default Login