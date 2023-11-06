import { FC } from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './appRoutes';
import PageContent from './components/shared/pageContent';

const App: FC = () => {
  return (
    <HashRouter>
      <PageContent>
        <AppRoutes />
      </PageContent>
    </HashRouter>
  );
};

export default App;
