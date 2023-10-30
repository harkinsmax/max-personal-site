import React, { FC } from 'react';
import './App.css';
import NavBar from './Shared/NavBar';
import { Outlet } from 'react-router-dom';

interface IProps extends React.PropsWithChildren { };

const App: FC<IProps> = (props) => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
