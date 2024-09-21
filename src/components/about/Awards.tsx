import { awards } from "@/constants/awards";
import AwardImage from "./AwardImage";

const Awards = () => {
  return (
    <div className="flex flex-col items-center w-full mb-[60px]">
      <div className="text-3xl py-[60px]">
        Awards
      </div>
      <div className="flex justify-center w-[90%] gap-5">
        {
          awards.map(award => {
            return <AwardImage key={award.id} award={award} />
          })
        }
      </div>
    </div>
  )
}

export default Awards