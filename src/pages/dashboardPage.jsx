import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import HomeSection from "../sections/dashboard/homeSection";
import MenuSection from "../sections/dashboard/menuSection";
import ClassesSection from "../sections/dashboard/classesSection";
import ProfileSection from "../sections/dashboard/profileSection";
import style from "./dashboardPage.module.css";

const DashboardPage = () => {
    useEffect(() => {
        document.title = "Dashboard - Virtual Classes";
    }, []);

    return (
        <>
            <div className={style.container_menu}>
                <MenuSection/>
            </div>
            <div className={style.container_dashboard}>
                <Routes>
                    <Route path="/" element={<HomeSection/>}/>
                </Routes>
            </div>
                {/* <MenuSection/>
                <Routes>
                    <Route path="/" element={<HomeSection/>}/>
                    <Route path="/clases" element={<ClassesSection/>}/>
                    <Route path="/perfil" element={<ProfileSection/>}/>
                </Routes> */}
        </>
    );
}

export default DashboardPage;