import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false);
     const handleTheme = () => {
    setTheme (prev => !prev);
  }
  useEffect(() => {
    document.documentElement.classList.toggle("dark" , theme);
  },[theme])
  return (
     <ThemeContext.Provider value = {{theme , handleTheme}}>
        {children}
     </ThemeContext.Provider>
  )
}

export default ThemeProvider;