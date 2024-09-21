import Image from "next/image"
import WhyUs from "./WhyUs"
import Skyscraper from "@/public/skyscraper-icon.png"

const AboutCompany = () => {
  return (
    <div className="w-[90%] h-[90vh] my-10 rounded-3xl shadow-surround dark:shadow-none dark:bg-gradient-to-br dark:from-black dark:to-grey-light p-[60px] relative overflow-hidden">
      <WhyUs/>
      <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[600px] h-[600px]">
        <Image src={Skyscraper} alt="skyscraper" fill style={{ objectFit: "contain", position: "absolute" }}/>
      </div>
    </div>
  )
}

export default AboutCompany