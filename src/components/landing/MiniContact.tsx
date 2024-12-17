import Link from 'next/link'
import React from 'react'

const MiniContact = () => {
  return (
    <div className='w-full mb-16 mt-10 pl-16 pr-16'>
       <div className="flex h-72 border-gray-300 border-2 rounded-md">
      {/* Left Side (60% Width, Grey) */}
      <div className="w-3/5 bg-black p-4 flex m-4 rounded-md items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Contact us for personal valuations.</h2>
          <p className="mt-5 text-lg">Get in touch with us for more information.</p>
          <Link href="/contact"><button className='bg-orange rounded-3xl w-36 p-2 mt-7'>Contact now!!</button></Link>
        </div>
      </div>

      {/* Right Side (40% Width) */}
      <div className="w-2/5 p-4 grid grid-cols-2 gap-4">
        {/* Box 1 */}
        <div className="bg-gray-300 p-4 shadow-lg rounded-md">
          <h3 className="text-5xl font-semibold text-black">80+</h3>
          <p className="mt-2 text-black">Trusted clients</p>
        </div>

        {/* Box 2 */}
        <div className="bg-gray-500 p-4 shadow-lg rounded-md">
          <h3 className="text-5xl font-semibold">10+</h3>
          <p className="mt-2">Branches in India</p>
        </div>

        {/* Box 3 */}
        <div className="bg-gray-500 p-4 shadow-lg rounded-md">
          <h3 className="text-5xl font-semibold">1000+</h3>
          <p className="mt-2">Approved valuations</p>
        </div>

        {/* Box 4 */}
        <div className="bg-orange p-4 shadow-lg rounded-md">
          <h3 className="text-5xl font-semibold">200+</h3>
          <p className="mt-2">Skilled professionals</p>
        </div>
      </div>
    </div>
      
    </div>
   
  )
}

export default MiniContact