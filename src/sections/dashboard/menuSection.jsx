import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./menuSection.module.css";

const MenuSection = () => {
    const navigate = useNavigate();
    
    const [img, useImg] = useState('https://i.pinimg.com/236x/7d/74/11/7d74113682887054ed1fe5db3078f458.jpg');
    const [nombre, useNombre] = useState('');

    return (
        <>  
            <div className={style.container}>
                <div className={style.logo}>
                    <a href="#" onClick={() => navigate('/dashboard/')}><img src="/assets/icons/Vector.png" alt="Logo"/></a>
                </div>
                <div className={style.menu}>
                    <ul>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/')}>
                                <span class="material-symbols-outlined">home</span>
                                <p className={style.p_link}>Home</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/clases')}>
                                <span class="material-symbols-outlined">calendar_today</span>
                                <p className={style.p_link}>Schedule</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/perfil')}>
                                <span class="material-symbols-outlined">backpack</span>
                                <p className={style.p_link}>Courses</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/ajustes')}>
                                <span class="material-symbols-outlined">videocam</span>
                                <p className={style.p_link}>Videos</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/ajustes')}>
                                <span class="material-symbols-outlined">settings</span>
                                <p className={style.p_link}>Ajustes</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.options}>
                    <ul>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/clases')}>
                            <span class="material-symbols-outlined">sms</span>
                                <p className={style.p_link}>Support</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/clases')}>
                            <span class="material-symbols-outlined">exit_to_app</span>
                                <p className={style.p_link}>Log out</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MenuSection;
