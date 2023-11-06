
import { FC } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Blog from './components/blog/blog';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/home" element={< Home />} />
      <Route path="/blog" element={< Blog />} />
    </Routes>
  );
};

export default AppRoutes;