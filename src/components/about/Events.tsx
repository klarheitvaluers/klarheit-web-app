import { events } from "@/constants/events"
import EventCard from "./EventCard"

const Events = () => {
  return (
    <div className="flex flex-col items-center pb-[60px] w-full">
      <div className="text-3xl pt-[60px] pb-20">
        Events
      </div>
      <div className="flex flex-col w-[90%] gap-20">
        {events.map(event => <EventCard key={event.id} id={event.id} image={event.image} title={event.title} description={event.description} />)}
      </div>
    </div>
  )
}

export default Events