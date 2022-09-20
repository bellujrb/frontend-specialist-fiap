import { Routes, Route } from "react-router-dom";
import HomeController from "../Screens/Home/HomeController";
import NotFoundController from "../Screens/Error404/NotFoundController"

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeController />} /> 
            <Route path="*" element={<NotFoundController/>} />
        </Routes>
    )
}

export default routes;