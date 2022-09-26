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

const AppCtx = createContext({} as AppCtxInterface);

const initialAppState: AppCtxInterface = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: false,
  setActiveMenu: () => {},
  handleClicked: () => {},
};

const AppContextProvider = ({ children }: { children: ReactNode }) => {
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

const useAppContext = () => useContext(AppCtx);

export { useAppContext, AppContextProvider };

