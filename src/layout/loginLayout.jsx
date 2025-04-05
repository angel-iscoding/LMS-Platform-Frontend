import React, { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import styles from "./loginLayout.module.css";
import LoginPage from "../pages/loginPage";

const LoginLayout = () => {
    return (
        <div className={styles.container}>
            <LoginPage/>
        </div>
    );
} 

export default LoginLayout;
