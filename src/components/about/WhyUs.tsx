import { bulletPoints } from "@/constants/bulletPoints"
import BulletPoint from "./BulletPoint"

const WhyUs = () => {
  return (
    <div className="flex justify-between h-full">
        <div className="text-2xl font-bold">
            Why Us
        </div>
        <div className="grid grid-cols-6 grid-rows-2 gap-5 w-2/3 h-full">
            {bulletPoints.map(bulletPoint => 
                <BulletPoint 
                    key={bulletPoint.id}
                    icon={bulletPoint.icon}
                    title={bulletPoint.title}
                    description={bulletPoint.description}
                />
            )}
        </div>
    </div>
  )
}

export default WhyUs