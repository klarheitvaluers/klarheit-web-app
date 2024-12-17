import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/logo.png";
import FooterIcons from './FooterIcons';
import { Mails, PhoneCall } from 'lucide-react';

const Footer = () => {
    return (
        <div className='h-[300px] bg-white text-black flex pt-14 justify-center gap-48 mt-10'>
            <div className=''>
                <Link href="/"><Image src={Logo} alt='logo' width={80} /></Link>
                <p className='font-semibold text-lg mt-4'>Klarheit Valuers</p>
                <p className='font-semibold text-lg'>& Engineering Services</p>
                <p className='mt-2'>Trusted property valuation and consulting, </p>
                <p>dedicated to precision and excellence.</p>
            </div>
            <div className='flex gap-20'>
                <div className='flex flex-col gap-1'>
                    <p className='font-semibold underline underline-offset-8 mb-1 text-lg'>Company</p>
                    <Link href="/"><p className='hover:text-orange'>Home</p></Link>
                    <Link href="/about"><p className='hover:text-orange'>About Us</p></Link>
                    <Link href="/services"><p className='hover:text-orange'>Services</p></Link>
                    <Link href="/location"><p className='hover:text-orange'>Location</p></Link>
                    <Link href="/careers"><p className='hover:text-orange'>Careers</p></Link>
                    <Link href="/contact"><p className='hover:text-orange'>Contact Us</p></Link>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='font-semibold underline underline-offset-8 mb-1 text-lg'>Location</p>
                    <p className='font-semibold'>Bengaluru</p>
                    <p className='text-sm'>Building num 1AC/201-1, 2nd Floor, 1st AA Cross,2nd Main Road,</p>
                    <p className='text-sm'>Kasturi Nagar, KR Puram Hobli,Bengaluru - 560 043</p>
                    <p className='mt-2 font-semibold'>Pune</p>
                    <p className='text-sm'>Office Number 103, 1st Floor, Pentagon, beside lane of Hotel Panchami</p>
                    <p className='text-sm'>Satara Road, Parvati, Pune - 411009</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='font-semibold underline underline-offset-8 mb-1 text-lg'>Contact Us</p>
                    <div className='flex text-black gap-2 items-center'>
                    <PhoneCall className='w-4 h-4'/>
                    <p>KA - +91 98341 97576 </p>
                    </div>
                    <div className='flex text-black gap-2 items-center'>
                    <PhoneCall className='w-4 h-4'/>
                    <p>MH - +91 95617 46996 </p>
                    </div>
                    <div className='flex text-black gap-2 items-center'>
                    <Mails className='w-4 h-4'/>
                    <p>technical.kv@klarheitvaluers.com</p>
                    </div>
                    <FooterIcons/>
                </div>
            </div>
        </div>
    )
}

export default Footer