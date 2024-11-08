import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./backButton.module.css";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate('/');
    }


    return (
        <>
            <a href="#" className={style.btn}>
                <button onClick={handleBackButton}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
            </a>
        </>
    );
}

export default BackButton;