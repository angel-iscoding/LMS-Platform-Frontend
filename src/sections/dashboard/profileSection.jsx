import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/store";
import style from './profileSection.module.css';

const ProfileSection = () => {
    const user = useSelector(selectUser);

    const [foto, useFoto] = useState("https://i.pinimg.com/236x/7d/74/11/7d74113682887054ed1fe5db3078f458.jpg");

    /* Soliciyd aqui */



    return (
        <>  
            <div className={style.container}>
                <h1>Perfil</h1>
                <div className={style.content}>
                    <div className={style.principal}>
                        <div className={style.foto}>
                            <img src={foto} alt="Profile" id={style.foto}/>
                        </div>
                    </div>
                    <div className={style.texto}>
                            <p><strong>Nombre: </strong>{user.name}</p>
                            <p><strong>Correo: </strong>{user.email}</p>
                        </div>
                    <div className={style.texto}>
                        <p><strong>Fecha de nacimiento: </strong>{user.birthdate}</p>
                        <p><strong>nDni: </strong>{user.nDni}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileSection;