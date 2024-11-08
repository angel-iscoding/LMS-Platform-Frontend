import React, { useEffect } from "react";
import styles from "./dashboardLayout.module.css";
import DashboardPage from "../pages/dashboardPage";

const DashboardLayout = () => {

    useEffect(() => {
        document.body.style.background = 'linear-gradient(to right, #cbd5e1, #d6d3d1)';

        return () => {
            document.body.style.background = '';
        };
    }, [])

    return (
        <>
            <div className={styles.container}>
                <DashboardPage/>
            </div>
        </>
    );
} 

export default DashboardLayout;