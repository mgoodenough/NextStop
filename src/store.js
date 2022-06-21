import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext({});

const StoreProvider = ({ children }) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ route, setRoute ] = useState(null);
  const [ direction, setDirection ] = useState(null);

  const reset = () => {
    setRoute(null);
    setDirection(null);
  };

  return (
    <StoreContext.Provider value={{
      isLoading, setIsLoading,
      route, setRoute,
      direction, setDirection, reset
    }}>
      { children }
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export default StoreProvider;