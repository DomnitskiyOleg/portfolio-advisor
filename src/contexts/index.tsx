import { createContext } from 'react';
import type { Auth } from '../types/index'

const initialContext: Auth =  {
    loggedIn: false,
    logIn: () => {},
    logOut: () => {},
};
const AuthContext = createContext(initialContext);

export default AuthContext;
