import React from "react";
import { createContext, useState, useContext, ReactNode } from "react";

type ITheme = "gray" | "light" | "green" | "orange";
type ThemeContextType = {
  theme: ITheme;
  changeTheme: (newTheme: ITheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>("light");

  const changeTheme = (newTheme: ITheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
