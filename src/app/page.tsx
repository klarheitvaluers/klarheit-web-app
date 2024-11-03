import dynamic from "next/dynamic";
import Landing from "@/components/landing/Landing";
const Icons = dynamic(() => import("@/components/landing/Icons"), {
  ssr: false
});

export default function Home() {
  return (
    <div className="relative flex flex-col w-[90%] m-auto h-[80vh] px-5 mt-10"> 
      <Landing/>
      <Icons/>
    </div>
  );
}
