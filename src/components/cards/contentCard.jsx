import React, { useEffect, useState } from "react";
import styles from './ContentCard.module.css';

const ContentCard = ({ title, taken, remaining, description, iconSRC, color, className, isDark = false }) => {
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
        if (isDark) {
            setTextColor("white");
        } else {
            setTextColor("black");
        }
    }, [isDark]);

    const transparentColor = (hexColor) => {
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, 0.1)`; 
    };

    return (
        <div
            className={`${className} ${styles.card}`}
            style={{ backgroundColor: `#${color}`, color: textColor }} 
        >
            <div className={styles.text}>
                <h4>{title}</h4>
                <p>
                    {description ? (
                        <span>{description}</span>
                    ) : (
                        <>
                            <span id={styles.taken}>{taken} Hrs taken </span>
                            <span id={styles.remaining} style={{color: "gray"}}>/ {remaining} Hrs</span>    
                        </>
                    )}
                </p>
            </div>
            <div className={styles.icon}>
                <div
                    style={{
                        backgroundColor: transparentColor(color),
                    }}
                >
                    <img src={iconSRC} alt="Clase"/>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;