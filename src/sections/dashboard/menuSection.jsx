import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./menuSection.module.css";

const MenuSection = () => {
    const navigate = useNavigate();
    
    const [img, useImg] = useState('https://i.pinimg.com/236x/7d/74/11/7d74113682887054ed1fe5db3078f458.jpg');
    const [nombre, useNombre] = useState('');

    return (
        <>
                <div className={style.logo}>
                    <a href="#" onClick={() => navigate('/dashboard/')}><img src="../../../assets/images/Logo-removebg-preview.png" alt="Logo"/></a>
                </div>
                <div className={style.menu}>
                    <ul>
                        <li className={style.link}><a href="#" onClick={() => navigate('/dashboard/')}><span className={`material-symbols-outlined ${style.icon}`}>home</span><p>Home</p></a></li>
                        <li className={style.link}><a href="#" onClick={() => navigate('/dashboard/clases')}><span className={`material-symbols-outlined ${style.icon}`}>import_contacts</span><p>Clases</p></a></li>
                        <li className={style.link}><a href="#" onClick={() => navigate('/dashboard/perfil')}><span className={`material-symbols-outlined ${style.icon}`}>account_circle</span><p>Perfil</p></a></li>
                    </ul>
                </div>
                <div className={style.profile}>
                    <a href="#" onClick={() => navigate('/dashboard/perfil')}>
                        <img src={img} alt="Profile" className={style.foto}/>
                    </a>
                    <h3>{nombre}</h3>
                </div>
            
        </>
    );
}

export default MenuSection;
