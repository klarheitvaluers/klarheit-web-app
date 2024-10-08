"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const MenuBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="cursor-pointer ml-3">
        {!isVisible && <Menu className="dark:text-white text-black h-6 w-6" onClick={() => {
          setIsVisible(true);
        }}/>}
        {isVisible && <X className="absolute dark:text-white text-black h-6 w-6 right-5 top-[24px] z-[50]" onClick={() => {
          setIsVisible(false);
        }}/>}
        {isVisible && <div className="bg-orange absolute w-[800px] h-[800px] rounded-full -top-96 -right-80">
        </div>}
    </div>
  )
}

export default MenuBar