import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/store";
import style from './profileSection.module.css';

const ProfileSection = () => {
    const user = useSelector(selectUser);

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
                </div>
            </div>
        </>
    );
}

export default ProfileSection;