import React from 'react';
import NotFoundController from '../Screen/Error404/NotFoundController';
import HomeController from '../Screen/Home/HomeController';
import { Routes, Route } from 'react-router-dom'

const routes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeController />} />
            <Route path='*' element={<NotFoundController />} />
        </Routes>
    );
};

export default routes;