import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import './App.css';

function App() {
  return (
    <Router>
     <NavigationMenu />
      <div className='d-flex container-fluid h-100 justify-content-center align-items-center bg-light'></div>
    </Router>
  );
}

export default App;
