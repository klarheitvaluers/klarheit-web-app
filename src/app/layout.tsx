import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Theme from "@/components/Theme";

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
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
