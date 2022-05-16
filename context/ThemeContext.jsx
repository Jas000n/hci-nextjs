import { useState, createContext } from "react";

const ThemeContext = createContext();
const ThemeProvider = (props) => {
  const [theme, setTheme] = useState({
    primaryColor: "#25b864",
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
