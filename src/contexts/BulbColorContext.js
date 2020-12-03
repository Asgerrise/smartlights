import React, { useState, createContext } from "react";

export const BulbColorContext = createContext();

const BulbColorContextProvider = ({ children }) => {
  const [color, setColor] = useState("hsl(41, 69%, 75%)");
  const [opacity, setOpacity] = useState(1);
  return (
    <BulbColorContext.Provider
      value={{
        colorContext: [color, setColor],
        opacityContext: [opacity, setOpacity],
      }}
    >
      {children}
    </BulbColorContext.Provider>
  );
};

export default BulbColorContextProvider;
