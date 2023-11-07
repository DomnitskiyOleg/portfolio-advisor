import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from './LogIn';
import Registration from './Registration';
import CreatePortfolio from './CreatePortfolio';
import PrivateRoute from './PrivateRoute';
import MyPortfolio from './MyPortfolio';

const RoutesBlock = () => (
  <div className='d-flex container-fluid flex-grow-1 justify-content-center align-items-center bg-light'>
    <Routes>
      <Route path='/' element={null} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/registration' element={<Registration />} />
      <Route
        path='/myportfolio'
        element={
          <PrivateRoute>
            <MyPortfolio />
          </PrivateRoute>
        }
      />
      <Route
        path='/create'
        element={
          <PrivateRoute>
            <CreatePortfolio />
          </PrivateRoute>
        }
      />
    </Routes>
  </div>
);

export default RoutesBlock;
