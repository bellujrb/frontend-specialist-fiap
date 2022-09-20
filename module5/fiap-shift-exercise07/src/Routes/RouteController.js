import React from 'react';
import HomeController from '../Screen/Home/HomeController'
import DetailController from '../Screen/Detail/DetailController';
import notFoundController from '../Screen/Error404/notFoundController';
import { Routes, Route } from "react-router-dom";

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeController />} />
            <Route path= "/" element={<notFoundController/>} />
            <Route path="detail">
                <Route index element={<DetailController />} />
                <Route path=":infoID" element={<DetailController />} />
                <Route path="add" element={<DetailController />} />
            </Route>
            <Route path="*" element={<notFoundController />} />
        </Routes>
    );
};

export default routes;