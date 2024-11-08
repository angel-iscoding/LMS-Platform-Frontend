import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginLayout from "./layout/loginLayout";
import DashboardLayout from "./layout/dashboardLayout";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<LoginLayout />} />
                <Route path="/dashboard/*" element={<DashboardLayout/>} />
            </Routes>
        </Router>
    );
}

export default App;
