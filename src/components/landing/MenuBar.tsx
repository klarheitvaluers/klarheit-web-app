"use client";

import { GraduationCapIcon, InfoIcon, MapPinIcon, Menu, MessageCircleMoreIcon, UserCogIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MenuBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="cursor-pointer ml-3">
        {!isVisible && <Menu className="dark:text-white text-black h-6 w-6" onClick={() => {
          setIsVisible(true);
        }}/>}
        {isVisible && <X className="absolute text-white h-6 w-6 right-[98px] top-[58px] z-50" onClick={() => {
          setIsVisible(false);
        }}/>}
        {isVisible && <div className="bg-orange absolute w-[800px] h-[800px] rounded-full -top-96 -right-80 z-30">
          <div className="flex flex-col gap-6 text-white">
            <Link href="/about" onClick={() => setIsVisible(false)}>
              <InfoIcon className="absolute h-9 w-9 bottom-[300px] left-[65px]"/>
            </Link>
            <Link href="/services" onClick={() => setIsVisible(false)}>
              <UserCogIcon className="absolute h-9 w-9 bottom-[240px] left-[82px]"/>
            </Link>
            <Link href="/location" onClick={() => setIsVisible(false)}>
              <MapPinIcon className="absolute h-9 w-9 bottom-[182px] left-[111px]"/>
            </Link>
            <Link href="/contact" onClick={() => setIsVisible(false)}>
              <MessageCircleMoreIcon className="absolute h-9 w-9 bottom-[90px] left-[195px]"/>
            </Link>
            <Link href="/careers" onClick={() => setIsVisible(false)}>
              <GraduationCapIcon className="absolute h-9 w-9 bottom-[132px] left-[158px]"/>
            </Link>
          </div>
        </div>}
    </div>
  )
}

export default MenuBar