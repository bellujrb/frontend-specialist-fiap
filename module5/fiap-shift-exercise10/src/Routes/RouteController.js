import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomeController from '../Screen/Home/HomeController';
import NotFoundController from '../Screen/NotFound/NotFoundController';

const routes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeController/>} />
            <Route path='*' element={<NotFoundController/>} />
        </Routes>
    );
}

export default routes;