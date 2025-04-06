import React, { useEffect } from "react";
import styles from "./dashboardLayout.module.css";
import DashboardPage from "../pages/dashboardPage";

const DashboardLayout = () => {
    return (
        <>
            <div className={styles.container}>
                <DashboardPage/>
            </div>
        </>
    );
} 

export default DashboardLayout;