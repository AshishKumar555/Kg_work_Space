import React from 'react';
import { useContext } from 'react';
import ThemeContext from "../Store/ThemeContext"

const Welcome = () => {
    const {theme,handleToggle}=useContext(ThemeContext)
  return (
    <div>
      <h1 className={ `text-lg  font-bold mx-auto max-w-3xl  ${theme ==='light'?("bg-yellow-300"):("bg-gray-700  text-white text-center" )}`} 
       >Welcome this is theme changin app</h1>
    </div>
  );
}

export default Welcome;
