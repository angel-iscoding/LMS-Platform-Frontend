import React, { useState } from "react";
import DateCard from "../../components/cards/classCard";
import style from "./classesSection.module.css";

const ClassesSection = () => {
    

    const [appointments, setAppointmets] = useState([
        {
            id: 1,
            title: "Matemáticas Avanzadas",
            className: "Cálculo Integral",
            description: "Clase sobre conceptos avanzados de cálculo integral.",
        },
        {
            id: 2,
            title: "Física Moderna",
            className: "Relatividad",
            description: "Estudio de la teoría de la relatividad.",
        },
        {
            id: 3,
            title: "Química Orgánica",
            className: "Hidrocarburos",
            description: "Exploración de los hidrocarburos y sus reacciones.",
        },
        {
            id: 4,
            title: "Biología Celular",
            className: "Genética",
            description: "Análisis de la estructura y función de los genes.",
        },
        {
            id: 5,
            title: "Historia Universal",
            className: "Edad Media",
            description: "Estudio de los eventos más importantes de la Edad Media.",
        },
        {
            id: 6,
            title: "Literatura Clásica",
            className: "Obras de Shakespeare",
            description: "Análisis de las obras más famosas de William Shakespeare.",
        },
        {
            id: 7,
            title: "Arte Contemporáneo",
            className: "Impresionismo",
            description: "Exploración del movimiento impresionista en el arte.",
        },
        {
            id: 8,
            title: "Informática",
            className: "Programación en Python",
            description: "Curso introductorio a la programación en Python.",
        },
        {
            id: 9,
            title: "Economía",
            className: "Microeconomía",
            description: "Estudio de los principios básicos de la microeconomía.",
        },
        {
            id: 10,
            title: "Filosofía",
            className: "Existencialismo",
            description: "Introducción a los conceptos del existencialismo.",
        }
    ]);

    return (
        <>
            <div className={style.head}>
                <div className={style.name}>
                    <span className="material-symbols-outlined">import_contacts</span>
                    <h1>Clases</h1>    
                </div>
            </div>
            <div className={style.container}> 
                <div className={style.citas}>
                    {appointments.map(appointment => (
                        <DateCard key={appointment.id} data={appointment}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ClassesSection;