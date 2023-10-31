import React, { FC } from 'react';
import './App.css';
import NavBar from './components/shared/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Blog from './components/blog/blog';
import About from './components/about/about';

const App: FC = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
