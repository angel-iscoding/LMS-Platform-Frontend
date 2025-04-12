import React, { useState, useEffect } from "react";
import styles from "./smallCalendar.module.css";

const SmallCalendar = () => {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [homeworks, setHomeworks] = useState([]);

    // Mock data de tareas
    useEffect(() => {
        const mockHomeworks = [
            {
                id: "1",
                class: "Mathematics",
                professor: "Mr. Smith",
                state: "unfinished",
                date: new Date(2025, 3, 10), // 10 de abril de 2025
            },
            {
                id: "2",
                class: "Physics",
                professor: "Dr. Brown",
                state: "complete",
                date: new Date(2025, 3, 15), // 15 de abril de 2025
            },
            {
                id: "3",
                class: "Chemistry",
                professor: "Ms. Johnson",
                state: "overdue",
                date: new Date(2025, 3, 20), // 20 de abril de 2025
            },
            {
                id: "4",
                class: "Biology",
                professor: "Dr. Green",
                state: "unfinished",
                date: new Date(2025, 3, 25), // 25 de abril de 2025
            },
            {
                id: "5",
                class: "History",
                professor: "Mr. White",
                state: "unfinished",
                date: new Date(2025, 3, 30), // 30 de abril de 2025
            },
        ];
        setHomeworks(mockHomeworks);
    }, []);

    // Calcula los días del mes actual
    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth(); // Mes actual (0-11)
        const days = new Date(year, month + 1, 0).getDate(); // Número de días en el mes
        const daysArray = Array.from({ length: days }, (_, i) => i + 1);
        setDaysInMonth(daysArray);
    }, [currentDate]);

    // Cambia al mes anterior
    const handlePrevMonth = () => {
        setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    // Cambia al mes siguiente
    const handleNextMonth = () => {
        setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    // Verifica si hay tareas para un día específico
    const hasHomework = (day) => {
        return homeworks.some(
            (hw) =>
                hw.date.getFullYear() === currentDate.getFullYear() &&
                hw.date.getMonth() === currentDate.getMonth() &&
                hw.date.getDate() === day
        );
    };

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarHeader}>
                <h3 className={styles.monthName}>
                    {currentDate.toLocaleString("default", { month: "long" }).toUpperCase()}{" "}
                    {currentDate.getFullYear()}
                </h3>
                <div>
                    <button className={styles.navButton} onClick={handlePrevMonth}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 18L9 12L15 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button className={styles.navButton} onClick={handleNextMonth}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 18L15 12L9 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={styles.weekDays}>
                {daysOfWeek.map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            <div className={styles.daysGrid}>
                {daysInMonth.map((day, index) => (
                    <div
                        key={index}
                        className={`${styles.day} ${hasHomework(day) ? styles.hasHomework : ""}`}
                    >
                        {String(day).padStart(2, "0")} 
                        <div className={styles.dot}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SmallCalendar;