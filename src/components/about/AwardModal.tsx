"use client"

import useModal from "@/hooks/useModal"
import Image from "next/image";
import Trophy from "@/public/trophy.png";

const AwardModal = () => {
  const [modal, setModal] = useModal();
  
  if(modal) {
    return (
      <div className="h-80 w-[60%] flex bg-gradient-to-br from-black to-grey-light rounded-3xl p-16 items-center gap-10 relative">
        <div className="text-white absolute right-6 top-6 cursor-pointer" onClick={() => setModal(false)}>
            X
        </div>
        <div className="w-60 h-60 rounded-full relative">
          <Image src={Trophy} alt="award-image" fill style={{ objectFit: "cover", position: "absolute" }} />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-orange text-3xl">
            Best Company of the Year
          </p>
          <p className="text-white text-base">
            Awarded for demonstrating unparalleled leadership, innovation, and financial growth over the past year. 
            This recognition is given to a company that has set new industry standards, showcased a commitment to excellence, and delivered consistent value to both customers and stakeholders.
          </p>
        </div>
      </div>
    )
  }
}

export default AwardModal;