import React, { ReactNode } from 'react';
import useAuth from '../hooks/index';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children?: ReactNode }) => {
  const { loggedIn } = useAuth();

  return loggedIn ? <>{children}</> : <Navigate to='/login' />;
};

export default PrivateRoute;