import React, { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const origin = window.location.origin;

  useEffect(() => {
    (async () => {
      const response = await fetch(`${origin}/data/data.json`);
      const result = await response.json();
      setData(result.rooms);
    })();
  }, [origin]);
  return (
    <dataContext.Provider value={{ data }}>{children}</dataContext.Provider>
  );
};

export default DataContextProvider;
