
import { useState } from "react";
import { ThemeProvider } from "./context/theme.js";
import "./index.css";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";

function App() {
const [themeMode,setthemeMode] =useState("light")
// const [,setlightTheme] =useState("dark")

  const lightTheme=()=>{
    setthemeMode("light");
  }
  const darkTheme=()=>{
    setthemeMode("dark");
  }
// acully change in theme
    useEffect(()=>{
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
    },[themeMode])
  return (
    <>
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
    
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme button */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">{/* theme card */}
          <Card/>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
