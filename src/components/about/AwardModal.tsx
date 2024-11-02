"use client"

import useModal from "@/hooks/useModal"
import Image from "next/image";
import Trophy from "@/public/trophy.png";

const AwardModal = () => {
  const [modal, setModal] = useModal();
  
  if(modal) {
    return (
      <>
      <div className="fixed h-screen w-full top-0 left-0 z-50 backdrop-blur-xl">
      <div className="h-80 w-[60%] flex bg-gradient-to-br from-black to-grey-light rounded-3xl p-16 items-center gap-10 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
      </div>
      </>
    )
  }
}

export default AwardModal;