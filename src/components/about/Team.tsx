import TeamMember from "./TeamMember"

const Team = () => {
  return (
    <div className="flex flex-col items-center pb-[60px]">
      <div className="text-3xl py-[60px]">
        Meet Our Team
      </div>
      <div className="grid grid-cols-3 grid-rows-3  w-fit">
        <TeamMember row={"row-start-1"} col={"col-start-1"}/>
        <TeamMember row={"row-start-1"} col={"col-start-3"}/>
        <TeamMember row={"row-start-2"} col={"col-start-2"}/>
        <TeamMember row={"row-start-3"} col={"col-start-1"}/>
        <TeamMember row={"row-start-3"} col={"col-start-3"}/>
      </div>
    </div>
  )
}

export default Team;