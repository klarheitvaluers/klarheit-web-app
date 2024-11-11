import dynamic from "next/dynamic";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Theme from "@/components/Theme";
import Image from "next/image";
import MenuBar from "@/components/landing/MenuBar";
import Logo from "@/public/logo.png";
import Link from "next/link";
import Footer from "@/components/landing/Footer";
const ToggleMode = dynamic(() => import("@/components/ToggleMode"), {
  ssr: false
});

const MonaSans = localFont({
  src: [
    {
      path: "../public/fonts/Mona-Sans-RegularWide.otf",
      weight: "400"
    },
    {
      path: "../public/fonts/Mona-Sans-SemiBoldWide.otf",
      weight: "600"
    },
    {
      path: "../public/fonts/Mona-Sans-BoldWide.otf",
      weight: "700"
    },
    {
      path: "../public/fonts/Mona-Sans-ExtraBoldWide.otf",
      weight: "800"
    },
    {
      path: "../public/fonts/Mona-Sans-BlackWide.otf",
      weight: "900"
    }
  ],
  variable: "--font-mona"
});

export const metadata: Metadata = {
  title: "KlarheitValuers",
  description: "Klarheit Valuers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${MonaSans.variable} overflow-x-hidden`}>
        <Theme>
          <div className="font-mona">
            <div className="w-[90%] m-auto px-5 my-10 flex flex-row items-center justify-between">
              <div className="flex flex-col gap-2">
                <Link href="/">
                  <Image src={Logo} alt="logo" width={80}/>
                </Link>
              </div>
              <div className="flex items-center">
                <MenuBar/>
                <ToggleMode/>
              </div>
            </div>
            {children}
          </div>
        <Footer/>  
        </Theme>
      </body>
    </html>
  );
}
