import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavigationMenu />
      <div className='d-flex container-fluid h-100 justify-content-center align-items-center bg-light'>
        <Routes>
          <Route path='/' element={null} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
