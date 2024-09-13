import { initialTestimonials } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center pb-[60px]">
      <div className="text-3xl py-[60px]">
        What do people tell about us? 
      </div>
      <div className="flex gap-5 justify-center items-center">
        {initialTestimonials.map((data) => <TestimonialCard key={data.id} data={data}/>)}
      </div>
    </div>
  )
}

export default Testimonials