import { User } from '@/types/user'
import React from 'react'

const EmailContacts = ({name,email,phone,address}:User) => {
  return (
    <div className='w-96 h-64 bg-gray-600 rounded-[36px] flex flex-col gap-2 justify-center pl-7 pr-7'>
        <p className='text-2xl'>{name}</p>
        <p className='text-md text-black'>{phone}</p>
        <p className='text-sm text-wrap text-black'>{address}</p>
        <p className='text-lg text-black'>{email}</p>
        <div className='flex gap-10'>
        <button className="bg-black p-3 rounded-[36px]">Mark as done</button>
        <button className='bg-orange p-3 rounded-[36px]'>Delete</button>
        </div>
    </div>
  )
}

export default EmailContacts