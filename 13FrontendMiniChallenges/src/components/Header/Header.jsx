import React, { useEffect, useState } from "react";
import ThemeBtn from "../ThemeBtn";
import { ThemeProvider } from "../../contexts/theme";
function Header() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <nav className="bg-blue-500 text-white dark:bg-slate-800 p-3">
        <div className="inline text-2xl font-semibold">
          React Mini Challenges
        </div>
        <div className="float-end">
          <ThemeBtn />
          <a href="www.github.com/prafulaswale">Source Code</a>
        </div>
      </nav>
    </ThemeProvider>
  );
}

export default Header;
