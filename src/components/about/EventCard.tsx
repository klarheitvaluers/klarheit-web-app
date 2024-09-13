import Image, { StaticImageData } from "next/image"

const EventCard = ({ id, image, title, description }: { id: number, image: StaticImageData, title: string, description: string }) => {
  return (
    <div className="w-full flex ">
        {(id % 2 != 0) && <div className="w-1/2 relative">
            <Image src={image} alt={title} fill style={{ objectFit: "contain", position: "absolute" }}/>
        </div>}

        <div className="w-1/2 h-96 flex flex-col gap-4 text-white bg-gradient-to-br from-black from-60% dark:from-20% to-grey-light rounded-3xl p-10">
            <div className="text-3xl text-orange">
                {title}
            </div>
            <div className="text-lg">
                {description}
            </div>
        </div>

        {(id % 2 == 0) && <div className="w-1/2 relative">
            <Image src={image} alt={title} fill style={{ objectFit: "contain", position: "absolute" }}/>
        </div>}
    </div>
  )
}

export default EventCard