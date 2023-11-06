import { FC } from 'react';
import './App.scss';
import NavBar from './components/shared/navBar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './appRoutes';
import PageContent from './components/shared/pageContent';

const App: FC = () => {
  return (
    <BrowserRouter>
      <PageContent>
        <AppRoutes />
      </PageContent>
    </BrowserRouter>
  );
};

export default App;
