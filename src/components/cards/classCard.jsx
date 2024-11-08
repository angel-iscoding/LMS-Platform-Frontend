import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/store";
import style from "./classCard.module.css";

const DateCard = ({ data }) => {
    const user = useSelector(selectUser);

    const [newCard, setNewCard] = useState({
        id: 0,
        title: '',
        className: '',
        description: '',
        date: '',
        time: '',
        status: true
    });

    const [dateData, setDateData] = useState({
        date: '',
        time: ''
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;

        const dateTime = new Date(value);
        const date = dateTime.toISOString().split("T")[0];
        const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

        setDateData({
            date: date,
            time: time
        });

        setError('');
        setSuccessMessage(''); 
    };

    const handleSubmitClass = async (event) => {
        event.preventDefault();

        if (!dateData.date || !dateData.time) {
            setError('Por favor ingrese una fecha y hora válida.');
            return;
        }

        const updatedCard = {
            id: user.id,
            title: data.title,
            className: data.className,
            description: data.description,
            date: dateData.date,
            time: dateData.time,
            status: true
        };

        try {
            const response = await axios.post('http://localhost:8080/turns/schedule', updatedCard);
            console.log('Cita creada:', response.data);
            setSuccessMessage('¡Cita agendada con éxito!');
            setNewCard(updatedCard); 
        } catch (error) {
            console.error('Error al crear la cita:', error);
            setError('Error al crear la cita. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <>
            <div className={style.card}>
                <h2 className={style.titulo}>{data.title}</h2>
                <p>Materia: {data.className}</p>
                <div className={style.container}>
                    <p>Descripción: {data.description}</p>
                </div>
                <div className={style.container}>
                    <form onSubmit={handleSubmitClass}>
                        <input
                            onChange={handleInputChange}
                            value={`${dateData.date}T${dateData.time}`}
                            name="date"
                            type="datetime-local"
                            required
                        />
                        {error && <p className={style.error}>{error}</p>}
                        {successMessage && <p className={style.successMessage}>{successMessage}</p>}
                        <button type="submit">Citar Clase</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default DateCard;
