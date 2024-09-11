"use client"

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
    <button onClick={handleTheme} className="rounded-lg p-3 border-2 mx-5">
      {theme === "light" ? "Dark" : "Light"}
    </button>
  )
}

export default ToggleMode