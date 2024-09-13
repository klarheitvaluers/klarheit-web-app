import TeamMember from "./TeamMember"

const Team = () => {
  return (
    <div className="relative mt-10 mb-[60px]">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-3xl">
        Meet Our Team
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-20 w-fit rotate-45">
        <TeamMember row={"row-start-1"} col={"col-start-2"}/>
        <TeamMember row={"row-start-2"} col={"col-start-1"}/>
        <TeamMember row={"row-start-2"} col={"col-start-2"}/>
        <TeamMember row={"row-start-2"} col={"col-start-3"}/>
        <TeamMember row={"row-start-3"} col={"col-start-2"}/>
      </div>
    </div>
  )
}

export default Team;