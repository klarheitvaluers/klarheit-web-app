"use client"

import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";

const Theme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} enableColorScheme={false}>
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default Theme;