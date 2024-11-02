import React from 'react'

const ServicesCard = ({icon,service}:{icon:React.ReactNode,service:string}) => {
  return (
    <div className='bg-grey-base w-56 h-32 rounded-[36px] flex justify-center items-center flex-col px-5'>
          <div className='text-white bg-orange rounded-full w-16 h-16 flex mb-32 absolute justify-center items-center'>{icon}</div>
          <p className='text-md text-center mt-3'>{service}</p>
    </div>
  )
}

export default ServicesCard