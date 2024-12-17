import dynamic from "next/dynamic";
import Landing from "@/components/landing/Landing";
import MiniContact from "@/components/landing/MiniContact";
const Icons = dynamic(() => import("@/components/landing/Icons"), {
  ssr: false
});

export default function Home() {
  return (
    <div className="relative flex flex-col w-[90%] m-auto px-5 mt-10"> 
      <Landing/>
      <Icons/>
      {/* <MiniAbout/> */}
      <MiniContact/>
    </div>
  );
}
