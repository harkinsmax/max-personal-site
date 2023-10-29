import React, { FC } from 'react';
import './App.css';

interface IProps extends React.PropsWithChildren { };

const App: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <>
      {children}
    </>
  );
}

export default App;
