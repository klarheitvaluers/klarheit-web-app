import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/logo.png";
import FooterIcons from './FooterIcons';
import { Mails, PhoneCall } from 'lucide-react';

const Footer = () => {
    return (
        <div className='h-[300px] bg-white text-black flex pt-14 justify-center gap-72'>
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
                    <p className=''>Bengaluru</p>
                    <p className='text-sm'>adress line 1</p>
                    <p className='text-sm'>adress line 2</p>
                    <p className='mt-2'>Pune</p>
                    <p className='text-sm'>adress line 1</p>
                    <p className='text-sm'>adress line 2</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='font-semibold underline underline-offset-8 mb-1 text-lg'>Contact Us</p>
                    <div className='flex text-black gap-2 items-center'>
                    <PhoneCall className='w-4 h-4'/>
                    <p>KA-phone number</p>
                    </div>
                    <div className='flex text-black gap-2 items-center'>
                    <PhoneCall className='w-4 h-4'/>
                    <p>MH-phone number</p>
                    </div>
                    <div className='flex text-black gap-2 items-center'>
                    <Mails className='w-4 h-4'/>
                    <p>klarheitvaluers24@gmail.com</p>
                    </div>
                    <FooterIcons/>
                </div>
            </div>
        </div>
    )
}

export default Footer