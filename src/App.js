import React from 'react';
import { createContext, useState, useEffect } from "react";
import "./App.css"


import Pages from './pages/Pages';


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const data = window.localStorage.getItem('theme mode');
    if (data !== "light")setTheme(data);

  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme mode', theme);

  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      
    <div className="App" id={theme}>
      
      <Pages />



    </div>
    
    </ThemeContext.Provider>
    
  );
}







export default App;
