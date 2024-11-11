import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutGif from '@/public/about.gif'

const MiniAbout = () => {
  return (
    <div className='h-[550px] bg-white text-black rounded-3xl ml-20 mr-20 flex justify-center items-center'>
        <div className='w-2/5 flex justify-center items-center'>
            <Image src={AboutGif} alt='about-us-gif' width={300} height={300} className='rounded-3xl'/>
        </div>
        <div className='w-3/5 flex justify-center flex-col mr-12'>
            <p className='text-2xl'>About Us..</p>
            <p className='mt-3 mb-4'>We specialize in reliable property valuation and consulting services, delivering expertise in property appraisal, structural design, and project consulting. Our dedicated team ensures precision and trust in every report we provide.</p>
            <Link href="/about"><button className='bg-orange rounded-3xl w-36 p-2'>Know us more</button></Link>
        </div>
    </div>
  )
}

export default MiniAbout