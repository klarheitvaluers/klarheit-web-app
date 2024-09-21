"use client"

import Image from "next/image";
import Avatar from "@/public/avatar.jpg";
import { useState } from "react";

const TeamMember = ({ row, col } : { row: string, col: string } ) => {
  const [toggle, setToggle] = useState(true);
  
  return (
    <div className={`flex items-center justify-center h-60 w-60 rounded-full bg-orange ${col} ${row} cursor-pointer`} onMouseOver={() => setToggle(false)} onMouseLeave={() => setToggle(true)}>
      {toggle && <div className="relative w-[180px] h-[180px] rounded-full">
        <Image src={Avatar} alt="team-member" fill style={{ objectFit: "cover", position: "absolute", borderRadius: "50%" }}/>
      </div>}
      {!toggle && <div className="flex flex-col items-center gap-1.5 text-white">
        <p className="text-xl">John Doe</p>
        <p className="text-lg">Founder</p>
      </div>}
    </div>
  )
}

export default TeamMember;