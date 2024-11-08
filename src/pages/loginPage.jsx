import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginSection from "../sections/login/loginSection";
import ImageSection from "../sections/login/imageSection";
import RegisterSection from "../sections/login/registerSection";
import style from "./loginPage.module.css";

const LoginPage = () => {
    return (
        <div className={style.container}>
            <ImageSection />
            <Routes>
                <Route path="/" element={<LoginSection/>}/>
                <Route path="/register" element={<RegisterSection/>}/>
            </Routes>
        </div>
    );
}

export default LoginPage;
