import { initialTestimonials } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
      {initialTestimonials.map((data) => <TestimonialCard key={data.id} data={data}/>)}
    </div>
  )
}

export default Testimonials