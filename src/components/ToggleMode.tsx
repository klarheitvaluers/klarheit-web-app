"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <button onClick={handleTheme} className="rounded-lg p-3">
      {theme === "light" ? <Moon/> : <Sun/> }
    </button>
  )
}

export default ToggleMode