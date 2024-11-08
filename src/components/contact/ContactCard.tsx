import { MapPin, MessageCircleMore, PhoneCall } from 'lucide-react'
import React from 'react'
import ContactIcons from './ContactIcons'

const ContactCard = () => {
    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <div className='w-3/5 flex mb-12 rounded-[36px] border-gray-500 border-2 p-5 gap-10'>
                <div className='w-1/3 h-[550px] pl-2 pt-4'>
                    <div className='text-white text-lg'>Klarheit Valuers</div>
                    <div className='flex gap-4 mt-6'>
                        <MessageCircleMore />
                        <div className=''>
                            <p className=''>Chat with us</p>
                            <p className='text-gray-700 text-sm'>Our friendly team is here to help.</p>
                            <p className='text-gray-400 text-sm'>klarheitvaluers24@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-6'>
                    <MapPin />
                        <div className=''>
                            <p className=''>Visit us</p>
                            <p className='text-gray-700 text-sm'>Come say hello at our office.</p>
                            <p className='text-gray-400 text-sm'>address line 1</p>
                            <p className='text-gray-400 text-sm'>adress line 2</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-6'>
                    <PhoneCall />
                        <div className=''>
                            <p className=''>Call us</p>
                            <p className='text-gray-700 text-sm'>Mon-Fri 10am-5pm.</p>
                            <p className='text-gray-400 text-sm'>+91 98341 97576 (Karnataka)</p>
                            <p className='text-gray-400 text-sm'>phone 2 (office 2)</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                    <ContactIcons/>
                    </div>
                </div>
                <div className='bg-orange w-2/3 h-[550px] rounded-[36px] text-black flex flex-col'>
                <p className='text-2xl font-semibold mt-6 pl-8 pr-8'>Let’s Value Your Vision</p>
                <p className='text-sm mt-2 pl-8 pr-8 font-semibold'>Connect with our expert team to bring clarity and confidence to your property decisions. Reach out today, and let’s make your goals a reality!</p>
                <div className='flex flex-col gap-3 mt-7 ml-8 mr-8'>
                <input type='text' placeholder='Give your name here.' className='p-2 bg-transparent border-0 border-b border-black placeholder:text-gray-800 placeholder:text-sm focus:outline-none'/>
                <input type='text' placeholder='Give your email here.' className='p-2 bg-transparent border-0 border-b border-black placeholder:text-gray-800 placeholder:text-sm focus:outline-none'/>
                <input type='textarea' placeholder='Any thoughts that you can share..' className='p-2 bg-transparent border-0 border-b border-black placeholder:text-gray-800 placeholder:text-sm focus:outline-none'/>
                </div>
                <div className='mt-7 ml-8 mr-8'>
                    <p className='text-sm text-gray-800 pb-1'>Find us in these locations, select your nearest one!</p>
                    <div className='flex flex-col'>
                        <label className='text-sm'><input type='checkbox' className='mr-2 text-black'/>Bangalore</label>
                        <label className='text-sm'><input type='checkbox' className='mr-2 text-black'/>Pune</label>
                        <label className='text-sm'><input type='checkbox' className='mr-2 text-black'/>Chennai</label>
                    </div>
                </div>
                <button className='bg-white text-black center p-3 ml-8 mr-8 rounded-[36px] mt-10'>Contact Now!</button>
                </div>
            </div>
        </div>
    )
}

export default ContactCard