import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BasicGrid from './pages/grid/BasicGrid';
import Gradiant from './pages/Gradiant';
import IncreaseNumber from './pages/IncreaseNumber';
import TripleReact from './pages/TripleReact';
import Toast from './pages/Toast';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<BasicGrid />} />
        <Route path="/gradiant" element={<Gradiant />} />
        <Route path="/incnum" element={<IncreaseNumber />} />
        <Route path="/triplereact" element={<TripleReact />} />
        <Route path="/toast" element={<Toast />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
