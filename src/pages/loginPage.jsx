import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginSection from "../sections/login/loginSection";
import RegisterSection from "../sections/login/registerSection";
import RecoverSection from "../sections/login/recoverSection";
import style from "./loginPage.module.css";

const LoginPage = () => {
    return (
        <div className={style.container}>
            <Routes>
                <Route path="/" element={<LoginSection/>}/>
                <Route path="/register" element={<RegisterSection/>}/>
                <Route path="/recover" element={<RecoverSection/>}/>
            </Routes>
        </div>
    );
}

export default LoginPage;
