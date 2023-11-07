import { useContext } from 'react';

import authContext from '../contexts/index';

const useAuth = () => useContext(authContext);

export default useAuth;
