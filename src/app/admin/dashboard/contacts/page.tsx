"use client"
import EmailContacts from '@/components/admin/EmailContacts'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { User } from '@/types/user';
import { useRouter } from 'next/navigation';

const Contacts = () => {
  const [contacts,setContacts] =  useState<User[]>([])
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
       axios.get("/api/contact")
       .then((res)=>setContacts(res.data))
       .catch((error)=>console.log(error))
   },[])

   if(contacts.length === 0){
    return (
      <div className='text-center'>No Contacts yet!!</div>
    )
   }
  return (
    
    <div className='flex flex-wrap gap-7 justify-center items-center'>
      {contacts.map((element,index)=><EmailContacts key={index} id={element._id} location={element.location} name={element.name} email={element.email} phone={element.phone} address={element.address}/>)}
    </div>
  )
}

export default Contacts
