"use client"

import useModal from "@/hooks/useModal";
import Image, { StaticImageData } from "next/image";

const AwardImage = ({ award }: { award: { title: string, description: string, image: StaticImageData } }) => {
  const [_, setModal] = useModal();

  return (
    <div className="relative w-40 h-40">
      <Image src={award.image} alt="trophy" fill style={{ objectFit: "contain", position: "absolute", cursor: "pointer" }} onMouseOver={() => setModal(true)}/>
    </div>
  )
}

export default AwardImage;