import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Toast from './pages/Toast';
import Gradiant from './pages/Gradiant';
import IncreaseNumber from './pages/IncreaseNumber';
import TripleReact from './pages/TripleReact';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/gradiant" element={<Gradiant />} />
        <Route path="/incnum" element={<IncreaseNumber />} />
        <Route path="/triplereact" element={<TripleReact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
