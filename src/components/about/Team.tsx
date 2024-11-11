import { teamMembers } from "@/constants/teamDetails"
import TeamCard from "./TeamCard"

const Events = () => {
  return (
    <div className="flex flex-col items-center pb-[60px] w-full">
      <div className="text-3xl pt-[60px] pb-20">
        Meet our Team
      </div>
      <div className="flex flex-col w-[90%] gap-20">
        {teamMembers.map(member => <TeamCard key={member.id} id={member.id} image={member.imageURL} title={member.title} vision={member.vision} specialization={member.specialization} notableAchievements={member.notableAchievements} memberName={member.name} educationalCredential = {member.educationalCredentials} professionalBackground={member.professionalBackground} />)}
      </div>
    </div>
  )
}

export default Events