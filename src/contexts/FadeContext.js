import React, { useState, createContext } from "react";

export const FadeContext = createContext();

const FadeContextProvider = ({ children }) => {
  const [fade, setFade] = useState(1);
  return (
    <FadeContext.Provider
      value={{
        fadeContext: [fade, setFade],
      }}
    >
      {children}
    </FadeContext.Provider>
  );
};

export default FadeContextProvider;
