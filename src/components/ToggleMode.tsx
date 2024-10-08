"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [ isSSR, setIsSSR ] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  if(isSSR) {
    return <p>Loading...</p>
  }

  return (
    <button onClick={handleTheme} className="rounded-lg p-3">
      {theme === "light" ? <Moon/> : <Sun/> }
    </button>
  )
}

export default ToggleMode