import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/store";
import axios from "axios";
import style from "./dateCard.module.css";

const DateCard = ({ data }) => {
    const user = useSelector(selectUser);

    const [isCancelled, setIsCancelled] = useState(!data.status); 
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        setButtonDisabled(isCancelled);
    }, [isCancelled]);

    const handleCancelButton = async () => {
        if (isCancelled) return;

        const url = `http://localhost:8080/turns/cancel/${data.id}`;

        try {
            setButtonDisabled(true);
            await axios.put(url);
            setIsCancelled(true);
        } catch (error) {
            console.error('Error al cancelar turno:', error);
            setButtonDisabled(false); 
        }
    };

    return (
        <div className={style.card}>
            <h2 id={style.titulo}>{data.title}</h2>
            <p><strong>Materia:</strong> {data.className}</p>
            <div className={style.container}>
                <p><strong>Descripcion:</strong> {data.description}</p>
            </div>
            <div className={style.container}>
                <p><strong>Estado:</strong> {isCancelled ? "Cancelado" : "Activa"}</p>
                <p><strong>Fecha:</strong> {data.date}</p>
                <p><strong>Hora:</strong> {data.time}</p>
                {!isCancelled ? (
                    <button onClick={handleCancelButton} className={style.button} disabled={buttonDisabled}>
                        Cancelar
                    </button>
                ) : (
                    <button className={style.button} disabled>Cancelado</button>
                )}
            </div>
        </div>
    );
};

export default DateCard;



    /* const [data, setDtoCard] = useState({
        id: data.id,
        title: data.title,
        className: data.className,
        description: data.description,
        date: data.date,
        time: data.time,
        status: data.status ? "Pendiente" : "Cancelado"
    }) */

    /* const [newCard, setNewCard] = useState({
        id: 0,
        title: '',
        className: '',
        description: '',
        date: '',
        time: '',
        status: true
    }) */

    /* const [dateData, setDateData] = useState({ 
        date: '', 
        time: '' 
    })
 */
    /* const handleInputChange = (event) => {
        const value = event.target.value;

        const dateTime = new Date(value);
        const date = dateTime.toISOString().split("T")[0]; // Obtener la fecha en formato "YYYY-MM-DD"
        const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Obtener la hora en formato "HH:mm"

        setDateData({
            date: date,
            time: time
        });

        console.log(dateData);
    }; */
