import React from 'react'

const ServicesCard = ({icon,service,liner}:{icon:React.ReactNode,service:string,liner:string}) => {
  return (
    <div className='bg-grey-base w-96 h-56 rounded-[36px] flex justify-center items-center flex-col px-5'>
          <div className='text-white bg-orange rounded-full w-16 h-16 flex mb-56 absolute justify-center items-center'>{icon}</div>
          <p className='text-md text-center mt-5'>{service}</p>
          <p className='text-sm text-center mt-5 text-gray-400'>{liner}</p>
    </div>
  )
}

export default ServicesCard