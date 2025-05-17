// import React, { createContext, useState, useEffect, useContext } from 'react';

// export const DarkModeContext = createContext();

// export const useDarkMode = () => {
//   return useContext(DarkModeContext);
// };

// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//       document.documentElement.style.backgroundColor = '#111827';
//     } else {
//       document.documentElement.classList.remove('dark');
//       document.documentElement.style.backgroundColor = '#f9fafb';
//     }
//   }, [darkMode]);

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };









import React, { createContext, useState, useEffect, useContext } from 'react';

export const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  // Default to light mode (false)
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#111827';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#f9fafb';
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
