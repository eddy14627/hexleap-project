// context/MyContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context state
interface MyContextState {
  // Define your state properties here
  mode: boolean;
  ChangeMode: () => void;
}

// Create the context object
const MyContext = createContext<MyContextState | undefined>(undefined);

// Define a custom hook to use the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

// Define the provider component
export const MyContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Define your state and functions to update it
  const [mode, setMode] = useState(false);

  const ChangeMode = () => {
    setMode(!mode);
  };

  // Define the context value
  const value: MyContextState = {
    mode,
    ChangeMode,
  };

  // Provide the context value to its children
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
