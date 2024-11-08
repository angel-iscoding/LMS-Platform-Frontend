import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/store";
import DateCard from "../../components/cards/dateCard";
import style from "./homeSection.module.css";

const HomeSection = () => {
    const user = useSelector(selectUser);
    const [userData, setUserData] = useState({});
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const getUserById = async (userId) => {
            const url = `http://localhost:8080/user/${userId}`;

            try {
                const response = await axios.get(url);
                setUserData(response.data);
                setAppointments(response.data.appointmets);
            } catch (error) {
                console.error('Error al obtener el usuario:', error);
            }
        };

        getUserById(user.id); 
    }, []); 

    return (
        <div className={style.container}>
            <div className={style.head}>
                <div className={style.titulo}>
                    <span className={`material-symbols-outlined`}>home</span>
                    <h1>Home</h1>
                </div>
                <div className={style.citas}>
                    <p>Citas: {appointments.length}</p>
                    <p>Canceladas: {appointments.filter(appointment => appointment.status === false).length}</p> 
                </div>
            </div>

            <div className={style.content}>
                <h1>Citas</h1>
                <div className={style.cita}>
                    {appointments.map(appointment => (
                        <DateCard key={appointment.id} data={appointment}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
