import React, { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import styles from "./loginLayout.module.css";
import LoginPage from "../pages/loginPage";

const LoginLayout = () => {
    useEffect(() => {
        document.body.style.background = 'linear-gradient(to right, #93c5fd, #dbeafe)';
        return () => {
            document.body.style.background = '';
        };
    }, []);

    return (
        <div className={styles.container}>
            <LoginPage/>
        </div>
    );
} 

export default LoginLayout;
