import TestimonialCard from "./TestimonialCard";

const initialTestimonials = [
  {
    id: 1,
    title: "Calmness and Diligence of the Service is Exquisite",
    description: "Calmness and Diligence of the Service is Exquisite. The Webapp looks clean and slink. The pricing is fair.",
    author: "John Doe",
    role: "Engineer at Meta"
  },
  {
    id: 2,
    title: "Calmness and Diligence of the Service is Exquisite",
    description: "Calmness and Diligence of the Service is Exquisite. The Webapp looks clean and slink. The pricing is fair.",
    author: "John Doe",
    role: "Engineer at Meta"
  },
  {
    id: 3,
    title: "Calmness and Crazy heck of a Service is Exquisite and neat yoo",
    description: "Calmness and Diligence of the Service is Exquisite. The Webapp looks clean and slink. The pricing is fair. Calmness and Diligence of the Service is Exquisite. The Webapp looks clean and slink. The pricing is fair.",
    author: "John Doe",
    role: "Engineer at Meta"
  }
]

const Testimonials = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
      {initialTestimonials.map((data) => <TestimonialCard key={data.id} data={data}/>)}
    </div>
  )
}

export default Testimonials