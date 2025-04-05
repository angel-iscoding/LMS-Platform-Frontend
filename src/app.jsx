import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginLayout from "./layout/loginLayout";
import DashboardLayout from "./layout/dashboardLayout";
import NotFountLayout from "./layout/notFoundLayout";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home/*" element={<LoginLayout />} />
                <Route path="/dashboard/*" element={<DashboardLayout/>} />
                <Route path="*" element={<NotFountLayout />} />
            </Routes>
        </Router>
    );
}

export default App;
