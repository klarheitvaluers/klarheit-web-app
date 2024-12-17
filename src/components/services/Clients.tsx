"use client"
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import b1 from '@/public/b1.png'
import b2 from '@/public/b2.png'
import b3 from '@/public/b3.png'
import b4 from '@/public/b4.png'
import b5 from '@/public/b5.png'
import b6 from '@/public/b6.png'
import b7 from '@/public/b7.png'
import b8 from '@/public/b8.png'
import b9 from '@/public/b9.png'
import b10 from '@/public/b10.png'
import b11 from '@/public/b11.png'
import b12 from '@/public/b12.png'
import b13 from '@/public/b13.png'
import b14 from '@/public/b14.png'

const images = [
  b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14
];

const Clients = () => {
  return (
    <div>
      <p className='text-center mt-10 mb-5 text-3xl'>Our clients</p>
<div className="overflow-hidden relative w-full">
      {/* Infinite scrolling wrapper */}
      <motion.div
        className="flex justify-center items-center h-48 mb-10 mt-10 pt-5 pb-5"
        animate={{
          x: ["20%", "-100%"],
        }}
        transition={{
          duration: images.length * 1.5, // Adjust speed based on number of images
          repeat: Infinity,
          repeatType: "loop", 
          ease: "linear", 
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-1/5 p-2">
            <Image
              src={src}
              alt={`carousel-image-${index}`}
              layout="responsive"
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
        {/* Duplicate the images to make it loop infinitely */}
        {images.map((src, index) => (
          <div key={index + images.length} className="flex-shrink-0 w-full md:w-1/5 p-2">
            <Image
              src={src}
              alt={`carousel-image-${index}`}
              layout="responsive"
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
    </div>
  )
}

export default Clients