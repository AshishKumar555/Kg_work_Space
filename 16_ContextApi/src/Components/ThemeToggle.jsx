import React from 'react';
import { useContext } from "react";
import ThemeContext from "../Store/ThemeContext"

const ThemeToggle = () => {


const {theme,handleToggle}=useContext(ThemeContext)

  return (
  
      <button className={ `text-lg mx-auto font-bold max-w-3xl ${theme ==='light'?("bg-yellow-300"):("bg-gray-700 text-white ")}`} onClick={handleToggle}>change theme</button>
    
  );
}

export default ThemeToggle;
