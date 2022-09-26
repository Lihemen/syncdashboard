import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ThemeInterface {
  currentColor: string;
  mode: string;
  setMode: (e: React.FormEvent<HTMLInputElement>) => void;
  setColor: (e: React.FormEvent<HTMLButtonElement>) => void;
  themeSettings: boolean;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeCtx = createContext({} as ThemeInterface);

export const ThemeCtxProvider = ({ children }: { children: ReactNode }) => {
  const currentTheme: string = localStorage.getItem('themeMode') || 'Light';

  const currentThemeColor: string =
    localStorage.getItem('colorMode') || '#03c9d7';

  const [currentColor, setCurrentColor] = useState<string>(currentThemeColor);
  const [currentMode, setCurrentMode] = useState<string>(currentTheme);
  const [themeSettings, setThemeSettings] = useState<boolean>(false);

  const setMode = (e: React.FormEvent<HTMLInputElement>): void => {
    setCurrentMode(e.currentTarget.value);

    localStorage.setItem('themeMode', e.currentTarget.value);

    setThemeSettings(false);
  };

  const setColor = (e: React.FormEvent<HTMLButtonElement>): void => {
    setCurrentColor(e.currentTarget.name);

    localStorage.setItem('colorMode', e.currentTarget.name);

    setThemeSettings(false);
  };

  return (
    <ThemeCtx.Provider
      value={{
        currentColor,
        mode: currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}>
      {children}
    </ThemeCtx.Provider>
  );
};
export const useThemeCtx = () => useContext(ThemeCtx);

