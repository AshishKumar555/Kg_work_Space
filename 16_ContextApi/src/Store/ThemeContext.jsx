import { createContext } from "react";
import { useState } from "react";

const ThemeContext=createContext();

 export const ThemeProvider=({children})=>{

      const [theme,setTheme]=useState("light");

      const handleToggle=()=>{

        setTheme((currentTheme)=>currentTheme==="light"?"dark":"light")
      }

      const ContextVal={theme:theme,handleToggle:handleToggle}

      return <ThemeContext.Provider value={ContextVal}>
              {children}
            </ThemeContext.Provider>

}
export default ThemeContext;