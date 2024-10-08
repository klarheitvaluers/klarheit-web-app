import Icons from "@/components/landing/Icons";
import MenuBar from "@/components/landing/MenuBar";
import ToggleMode from "@/components/ToggleMode";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Home() {
  return (
    <>
      {/* just for testing configuration */}
      <div className="relative flex flex-col w-[90%] m-auto h-screen px-5 my-10"> 
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <Image src={Logo} alt="logo" width={100}/>
            {/* <h1 className="font-bold text-5xl">
              Klarheit
            </h1> */}
            {/* <p className="font-normal text-lg">
              Welcome to KlarheitValuers
            </p> */}
          </div>
          <div className="flex items-center">
            <ToggleMode/>
            <MenuBar/>
          </div>
        </div>
        <Icons/>
      </div>
    </>
  );
}
