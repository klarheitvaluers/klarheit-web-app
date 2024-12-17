"use client"
import { MapPin, MessageCircleMore, PhoneCall } from 'lucide-react'
import React, { useState } from 'react'
import ContactIcons from './ContactIcons'
import ContactButton from './ContactButton'
import { User } from "@/types/user"

const ContactCard = () => {
   
    const [user,setUser] =  useState<User>({
        name:"",
        email:"",
        phone:0,
        address:"",
        location:"",
        _id:""
    })
    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <div className='w-3/5 flex mb-12 rounded-[36px] border-gray-500 border-2 p-5 gap-10'>
                <div className='w-1/3 h-[550px] pl-2 pt-4'>
                    <div className='text-white text-lg'>Klarheit Valuers</div>
                    <div className='flex gap-4 mt-6'>
                        <MessageCircleMore />
                        <div className=''>
                            <p className=''>Chat with us</p>
                            <p className='text-gray-600 text-sm'>Our friendly team is here to help.</p>
                            <p className='text-gray-400 text-sm'>technical.kv@klarheitvaluers.com</p>
                            <p className='text-gray-400 text-xs'>technical.karnataka@klarheitvaluers.com</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-6 text-wrap'>
                        <MapPin />
                        <div className=''>
                            <p className=''>Visit us</p>
                            <p className='text-gray-600 text-sm'>Come say hello at our office.</p>
                            <p className='text-gray-400 text-sm'>1AC/201-1, 2nd Floor, 1st AA Cross,2nd Main Road,</p>
                            <p className='text-gray-400 text-sm'>Kasturi Nagar, KR Puram Hobli,Bengaluru-43</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-6'>
                        <PhoneCall />
                        <div className=''>
                            <p className=''>Call us</p>
                            <p className='text-gray-600 text-sm'>Mon-Fri 10am-5pm.</p>
                            <p className='text-gray-400 text-sm'>+91 98341 97576 (Karnataka)</p>
                            <p className='text-gray-400 text-sm'>+91 95617 46996 (Pune)</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <ContactIcons />
                    </div>
                </div>
                <div className='bg-orange w-2/3 h-[550px] rounded-[36px] text-black flex flex-col'>
                    <p className='text-2xl font-semibold mt-6 pl-8 pr-8'>Let’s Value Your Vision</p>
                    <p className='text-sm mt-2 pl-8 pr-8 font-semibold'>Connect with our expert team to bring clarity and confidence to your property decisions. Reach out today, and let’s make your goals a reality!</p>
                    <div className='flex flex-col gap-3 mt-7 ml-8 mr-8'>
                        <input type='text' placeholder='Give your name here.' className='p-2 bg-transparent border-0 border-b border-black placeholder:text-gray-800 placeholder:text-sm focus:outline-none' onChange={(e)=>setUser({...user,name:e.target.value})} />
                        <input type='text' placeholder='Give your email here.' className='p-2 bg-transparent border-0 border-b border-black placeholder:text-gray-800 placeholder:text-sm focus:outline-none' onChange={(e)=>setUser({...user,email:e.target.value})} />
                        <input type='number' placeholder='Give your phone number here.' className='p-2 bg-transparent border-0 border-b border-black placeholder:text-gray-800 placeholder:text-sm focus:outline-none' onChange={(e)=>setUser({...user,phone:parseInt(e.target.value)})} />
                        <input type='text' placeholder='Give your full address here.' className='p-2 bg-transparent border-0 border-b border-black placeholder:text-gray-800 placeholder:text-sm focus:outline-none' onChange={(e)=>setUser({...user,address:e.target.value})}/>
                    </div>
                    <div className='mt-10 ml-8 mr-8 pl-2'>
                        <p className='text-sm text-gray-800 pb-1'>Find us in these locations, select your nearest one!</p>
                        <select className="p-1 bg-transparent text-sm text-gray-800 border-black border-b focus:outline-none cursor-pointer" onChange={(e)=>setUser({...user,location:e.target.value})}>
                            <option value={""}>Choose your nearest location</option>
                            <option value={"bangalore"}>Bangalore</option>
                            <option value={"pune"}>Pune</option>
                        </select>
                    </div>
                    <ContactButton user={user}/>
                </div>
            </div>
        </div>
    )
}

export default ContactCard