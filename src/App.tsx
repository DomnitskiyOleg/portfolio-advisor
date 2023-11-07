import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import CreatePortfolio from './components/CreatePortfolio';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import MyPortfolio from './components/MyPortfolio';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavigationMenu />
        <div className='d-flex container-fluid flex-grow-1 justify-content-center align-items-center bg-light'>
          <Routes>
            <Route path='/' element={null} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/myportfolio' element={<MyPortfolio />} />
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
      </Router>
    </AuthProvider>
  );
};

export default App;
