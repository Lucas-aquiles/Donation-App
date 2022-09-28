import { useState, createContext } from "react";

//intermediario

export const contextApp = createContext();

// para pasarle  a loc componentes como Provider
export const ContextApp = ({ children }) => {
  const [info, setInfo] = useState(false);

  return (
    <contextApp.Provider value={{ info, setInfo }}>
      {children}
    </contextApp.Provider>
  );
};
