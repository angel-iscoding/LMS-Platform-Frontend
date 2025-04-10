import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from "./registerSection.module.css";
import { validateRegist } from "../../helpers/validateRegist";
import BackButton from "../../components/buttons/backButton";

const RegisterSection = () => {
    const [userData, setUserData] = useState({
        email: '',
        username: '',
        password: ''
    });

    useEffect(() => {
        document.title = "Registro - Virtual Classes";
    }, []);

    const [errors, setErrors] = useState({});
    const [registerError, setRegisterError] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState("");

    const handleInputChange = (event) => {
        const { name , value } = event.target;

        setUserData({
            ...userData,
            [name]: value
        });

        const newErrors = validateRegist({
            ...userData,
            [name]: value
        });
        setErrors(newErrors);
    }

    const handleRegister = async(event) => {
        event.preventDefault();

        if (userData.password !== userData.confirmPassword) {   
            return alert("Las contraseñas no coinciden");
        }


        const newErrors = validateRegist(userData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) { 
            try {
                const response = await axios.post('http://localhost:8080/user/register', {
                    name: userData.name,
                    email: userData.email,
                    credentials: {
                        username: userData.username,
                        password: userData.password
                    }
                });

                setRegisterSuccess("¡Registro exitoso! Ahora puedes iniciar sesión con tu nueva cuenta.");

                setUserData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });

            } catch (err) {
                console.error("Error al registrar:", err);
                setRegisterError("Error al registrar. Por favor, inténtalo de nuevo más tarde.");
            }
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.icon}>
                    <img src="/assets/icons/Figma Import/Logo.png " alt="" />
                </div>
                <BackButton className={styles.backBtn} url={"/home"}/>
                <form className={styles.form}>
                    <div className={styles.form_group}>    
                        <div className={styles.form_container_icon}>
                            <img src="/assets/icons/Figma Import/Email.png" alt="" width={34}/>
                        </div>
                        <input 
                            type="email" 
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            placeholder="Email" 
                            required
                        />
                    </div>
                    <div className={styles.form_group}>
                        <div className={styles.form_container_icon}>
                            <img src="/assets/icons/Figma Import/User.png" alt="" width={34}/>
                        </div>
                        <input 
                            type="text" 
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                            placeholder="Nombre de usuario" 
                            required
                        />
                    </div>
                    <div className={styles.form_group}>
                        <div className={styles.form_container_icon}>
                            <img src="/assets/icons/Figma Import/Lock.png" alt="" width={34}/>
                        </div>
                        <input 
                            type="password" 
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                            placeholder="Contraseña" 
                            required
                        />    
                    </div>
                    <div className={styles.form_group}>
                        <div className={styles.form_container_icon}>
                            <img src="/assets/icons/Figma Import/Lockopen.png" alt="" width={34}/>
                        </div>
                        <input 
                            type="password" 
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirmar contraseña" 
                            required
                        />
                    </div>

                    
                </form>

                <button onClick={handleRegister} className={styles.btn}>Registrar</button>
                
                {registerError && <p className={styles.errorMessage}>{registerError}</p>}
                {registerSuccess && <p className={styles.successMessage}>{registerSuccess}</p>}
            </div>
        </>
    );
}

export default RegisterSection;
