import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
