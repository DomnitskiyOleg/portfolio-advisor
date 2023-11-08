import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import AuthProvider from './components/AuthProvider';
import RoutesBlock from './components/RoutesBlock';
import './styles/App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavigationMenu />
        <RoutesBlock />
      </Router>
    </AuthProvider>
  );
};

export default App;
