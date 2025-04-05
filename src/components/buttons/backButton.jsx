import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./backButton.module.css";

const BackButton = ({ className, url}) => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(url);
    }


    return (
        <>
            <a className={`${style.btn} ${className || ""}`}>
                <button onClick={handleBackButton}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
            </a>
        </>
    );
}

export default BackButton;