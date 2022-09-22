import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AppCtxInterface {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleClicked: (key: string) => void;
}

interface ScreenSizeInterface {
  screenSize: number;
  setScreenSize: () => void;
}

const AppCtx = createContext({} as AppCtxInterface);
const ScreenSizeContext = createContext({} as ScreenSizeInterface);

const initialAppState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: false,
  setActiveMenu: () => {},
  handleClicked: () => {},
};

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [clicked, setIsClicked] = useState({} as AppCtxInterface);

  const handleClicked = (key: string) => {
    setIsClicked({ ...initialAppState, [key]: true });
  };
  return (
    <AppCtx.Provider
      value={{
        ...clicked,
        activeMenu,
        setActiveMenu,
        handleClicked,
      }}>
      {children}
    </AppCtx.Provider>
  );
};

export const ScreenSizeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  const handleResize = () => setScreenSize(window.innerWidth);

  return (
    <ScreenSizeContext.Provider
      value={{ screenSize, setScreenSize: handleResize }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useAppContext = () => useContext(AppCtx);
export const useScreenSizeContext = () => useContext(ScreenSizeContext);

