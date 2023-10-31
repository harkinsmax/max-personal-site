
import { FC } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Blog from './components/blog/blog';
import About from './components/about/about';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/home" element={< Home />} />
      <Route path="/blog" element={< Blog />} />
      <Route path="/about" element={< About />} />
    </Routes>
  );
};

export default AppRoutes;