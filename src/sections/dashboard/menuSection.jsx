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
                    <a href="#" onClick={() => navigate('/dashboard/')}><img src="/assets/icons/Figma import/Logo.png" alt="Logo"/></a>
                </div>
                <div className={style.menu}>
                    <ul>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/')}>
                                <img src="/assets/icons/Figma Import/Home.png" width={22} alt="" />
                                <p className={style.p_link}>Home</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/clases')}>
                                <img src="/assets/icons/Figma Import/Calendar.png" width={22} alt="" />
                                <p className={style.p_link}>Schedule</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/perfil')}>
                                <img src="/assets/icons/Figma Import/Bag.png" width={22} alt="" />
                                <p className={style.p_link}>Courses</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/ajustes')}>
                                <img src="/assets/icons/Figma Import/Video.png" width={22} alt="" />
                                <p className={style.p_link}>Videos</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/ajustes')}>
                                <img src="/assets/icons/Figma Import/Ajustes.png" width={22} alt="" />
                                <p className={style.p_link}>Ajustes</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.options}>
                    <ul>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/clases')}>
                                <img src="/assets/icons/Figma Import/Chat.png" width={22} alt="" />
                                <p className={style.p_link}>Support</p>
                            </a>
                        </li>
                        <li className={style.link}>
                            <a href="#" onClick={() => navigate('/dashboard/clases')}>
                                <img src="/assets/icons/Figma Import/Sing out.png" width={22} alt="" />
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
