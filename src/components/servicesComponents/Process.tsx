// import Image from 'next/image'
import React from 'react'
import { FileCheck2 } from "lucide-react"

const Process = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='text-2xl w-full text-center'>
        How it works : Know the <span>process</span>
      </div>

      <div className='flex w-4/5 gap-16 mt-10'>
        <div className='flex flex-col w-3/5 h-full'>
          <p className='text-6xl text-grey-base'>01.</p>
          <p className='text-3xl mt-8'>Purpose of Valuation</p>
          <p className='text-lg text-grey-base font-semibold mt-3'>Determine the purpose of the property valuation, such as buying, selling, refinancing, or legal matters. Gather relevant property details and conduct an on-site inspection to assess its condition and features.</p>
        </div>
        <div className='w-2/5 h-36 flex justify-center items-center'>
          {/* <FileCheck2 className='h-full w-2/5'/> */}
        </div>
      </div>

      <div className='flex w-4/5 gap-28 mt-16'>       
        <div className='w-2/5 h-3/10'>
          {/* <Image src={}/> */}
        </div>
        <div className='flex flex-col w-3/5'>
          <p className='text-6xl text-grey-base'>02.</p>
          <p className='text-3xl mt-8'>Suitable Approach For Valuation</p>
          <p className='text-lg text-grey-base font-semibold mt-3'>Depends on purpose of valuation we use different Valuation methods which include the sales comparison approach, the income approach, or the cost approach method.</p>
        </div>
      </div>

      <div className='flex w-4/5 gap-28 mt-16'>
        <div className='flex flex-col w-3/5'>
          <p className='text-6xl text-grey-base'>03.</p>
          <p className='text-3xl mt-8'>Prepare The Valuation Report</p>
          <p className='text-lg text-grey-base font-semibold mt-3'>We compile all the data, methods used, and their findings into a formal valuation report. This report includes the estimated property value, reasoning, and any relevant market data.</p>
        </div>
        <div className='w-2/5 h-3/10'>
          {/* <Image src={}/> */}
        </div>
      </div>
      
    </div>
  )
}

export default Process