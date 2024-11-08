import React from "react";
import { Routes, Route } from "react-router-dom"
import HomeSection from "../sections/dashboard/homeSection";
import MenuSection from "../sections/dashboard/menuSection";
import ClassesSection from "../sections/dashboard/classesSection";
import ProfileSection from "../sections/dashboard/profileSection";
import style from "./dashboardPage.module.css";

const DashboardPage = () => {
    return (
        <>  
            <div className={style.left}>
                <MenuSection/>
            </div>
            <div className={style.right}>
                <Routes>
                    <Route path="/" element={<HomeSection/>}/>
                    <Route path="/clases" element={<ClassesSection/>}/>
                    <Route path="/perfil" element={<ProfileSection/>}/>
                </Routes>
            </div>
        </>
    );
}

export default DashboardPage;