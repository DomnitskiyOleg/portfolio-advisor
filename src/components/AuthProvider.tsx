import React, { ReactNode, useState } from 'react';
import AuthContext from '../contexts/index';

const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = (): void => {
    setLoggedIn(true);
  };
  const logOut = (): void => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
