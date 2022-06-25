import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Toast from './pages/Toast';
import IncreaseNumber from './pages/IncreaseNumber';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/incnum" element={<IncreaseNumber />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
