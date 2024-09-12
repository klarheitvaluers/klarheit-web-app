import { ThemeProvider } from "next-themes";

const Theme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} enableColorScheme={false}>
      {children}
    </ThemeProvider>
  )
}

export default Theme;