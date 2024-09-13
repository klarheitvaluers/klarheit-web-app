import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import Comma from "@/public/inverted-comma.png";

const TestimonialCard = ({ data }: { data: Testimonial }) => {
  return (
    <div className="flex flex-col justify-center gap-4 w-[380px] h-[380px] rounded-[36px] bg-black text-white dark:bg-white dark:text-black px-10 py-4">
      <div className="relative h-8 w-8">
        <Image src={Comma} alt="testmonial" fill style={{ objectFit: "cover", position: "absolute" }} />
      </div>
      <h3 className="text-2xl font-semibold">
        {data.title.length > 60 ? `${data.title.slice(0, 61)}...` : data.title}
      </h3>
      <p className="text-sm">
        {data.description.length > 110 ? `${data.description.slice(0, 111)}...` : data.description}
      </p>
      <div className="flex gap-4 items-center pt-4">
        <div className="rounded-full h-16 w-16 bg-orange">
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{data.author}</p>
          <p className="text-sm">{data.role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard