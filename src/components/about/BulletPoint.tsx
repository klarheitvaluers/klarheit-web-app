import Image, { StaticImageData } from "next/image"

const BulletPoint = ({ icon, title, description }: { icon: StaticImageData, title: string, description: string }) => {
  return (
    <div className="flex flex-col col-span-3 row-span-1 gap-6">
        <div className="flex items-center justify-center rounded-full h-16 w-16 bg-orange shadow-sm shadow-orange">
            <div className="relative w-[26px] h-[26px]">
                <Image src={icon} alt={"icon"} fill style={{ objectFit: "cover", position: "absolute" }}/>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold">
                {title}
            </h3>
            <p className="text-sm w-4/5">
                {description}
            </p>
        </div>
    </div>
  )
}

export default BulletPoint