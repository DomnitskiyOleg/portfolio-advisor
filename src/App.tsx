import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import CreatePortfolio from './components/CreatePortfolio';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavigationMenu />
      <div className='d-flex container-fluid flex-grow-1 justify-content-center align-items-center bg-light'>
        <Routes>
          <Route path='/' element={null} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/create' element={<CreatePortfolio />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
