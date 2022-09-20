import { Routes, Route } from "react-router-dom";
import NotFoundController from "../../../fiap-shift-exercise07/src/Screen/Error404/NotFoundController";

const routes = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFoundController/>} />
        </Routes>
    )
}