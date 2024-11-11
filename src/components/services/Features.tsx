import { AlarmClockCheck, Handshake, ShieldCheck } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
    <div className='h-[450px] bg-white text-black mt-16 rounded-3xl ml-28 mr-28 flex flex-col justify-center gap-10 pb-5'>
      <div className='text-2xl w-full text-center'>
        What is unique in our services?
      </div>
      <div className='pl-10 pr-10 flex justify-center items-center gap-20'>
        <div className='bg-black h-72 w-72 rounded-[36px] flex justify-start items-center flex-col'>
          <div className='text-white bg-orange rounded-full w-16 h-16 mt-10 mb-8 flex justify-center items-center'><ShieldCheck/></div>
          <p className='text-white text-md mb-5'>Accurate & Reliable</p>
          <p className='text-gray-400 text-sm text-center px-6'>Providing precise and dependable valuation reports that meet industry standards.</p>
        </div>
        <div className='bg-black h-72 w-72 rounded-[36px] flex justify-start items-center flex-col'>
          <div className='text-white bg-orange rounded-full w-16 h-16 mt-10 mb-8 flex justify-center items-center'><AlarmClockCheck/></div>
          <p className='text-white text-md mb-5'>Timely Delivery</p>
          <p className='text-gray-400 text-sm text-center px-6'>Fast and efficient service with a focus on meeting deadlines.</p>
        </div>
        <div className='bg-black h-72 w-72 rounded-[36px] flex justify-start items-center flex-col'>
          <div className='text-white bg-orange rounded-full w-16 h-16 mt-10 mb-8 flex justify-center items-center'><Handshake/></div>
          <p className='text-white text-md mb-5'>Expertise & Trust </p>
          <p className='text-gray-400 text-sm text-center px-6'>A team of certified professionals with extensive experience in property valuation and consulting.</p>
        </div>        
      </div>
    </div>
  )
}

export default Features