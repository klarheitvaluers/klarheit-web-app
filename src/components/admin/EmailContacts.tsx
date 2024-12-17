import { User } from '@/types/user'
import axios from 'axios'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const EmailContacts = ({id,name,email,phone,address}:User) => {
  const deleteContact = async()=>{
    try{
      await axios.delete("/api/contact",{data:{id}})
      toast.success("Contact deleted successfully, refresh to see the changes!!")
    }catch(error){
      console.log(error)
      toast.error("Error in deleting the resource.")
    }
  }
  return (
    <div className='w-96 h-64 bg-gray-600 rounded-[36px] flex flex-col gap-2 justify-center pl-7 pr-7'>
        <p className='text-2xl'>{name}</p>
        <p className='text-md text-black'> Phone no : {phone}</p>
        <p className='text-sm text-wrap text-black'>Address : {address}</p>
        <p className='text-lg text-black'>Email : {email}</p>
        <button className='bg-orange p-2 rounded-md w-24' onClick={deleteContact}>Delete</button>
        <Toaster/>
    </div>
  )
}

export default EmailContacts