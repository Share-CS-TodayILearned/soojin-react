import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Toast from './pages/Toast';
import Gradiant from './pages/Gradiant';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/toast' element={<Toast />} />
                <Route path='/gradiant' element={<Gradiant />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;