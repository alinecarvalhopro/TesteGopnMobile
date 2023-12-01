import React, {createContext, useState, useContext} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({name: 'Aline'});

  return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};
