import AboutCompany from "@/components/about/AboutCompany";
import AwardModal from "@/components/about/AwardModal";
import Awards from "@/components/about/Awards";
import Team from "@/components/about/Team";
import Testimonials from "@/components/about/Testimonials";

const About = () => {
    return (
        <div className="flex flex-col gap-6 items-center relative">
            <AwardModal/>
            <AboutCompany/>
            <Team/>
            <Testimonials/>            
            <Awards/>
        </div>
    )
}

export default About;