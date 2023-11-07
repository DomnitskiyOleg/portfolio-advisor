import { createContext } from 'react';

interface Auth {
    loggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
  }
const initialContext: Auth =  {
    loggedIn: false,
    logIn: () => {},
    logOut: () => {},
};
const AuthContext = createContext(initialContext);

export default AuthContext;
