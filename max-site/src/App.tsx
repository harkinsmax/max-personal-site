import React, { FC } from 'react';
import './App.css';
import NavBar from './components/shared/navBar';
import { Outlet } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
