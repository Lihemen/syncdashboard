import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ScreenSizeInterface {
  screenSize: number;
  setScreenSize: () => void;
}

const ScreenSizeContext = createContext({} as ScreenSizeInterface);

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
export const useScreenSizeContext = () => useContext(ScreenSizeContext);
