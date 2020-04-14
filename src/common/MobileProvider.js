import React, { useEffect, useState } from "react";

export const MobileContext = React.createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => resize());
    resize();
  });

  const resize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <MobileContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </MobileContext.Provider>
  );
};
