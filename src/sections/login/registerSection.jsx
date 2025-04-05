import React, { useState } from "react";
import axios from 'axios';
import styles from "./registerSection.module.css";
import { validateRegist } from "../../helpers/validateRegist";
import BackButton from "../../components/buttons/backButton";

const RegisterSection = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: ''
    });

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

        const newErrors = validateRegist(userData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) { 
            try {
                const response = await axios.post('http://localhost:8080/user/register', {
                    name: userData.name,
                    email: userData.email,
                    birthdate: userData.birthdate,
                    nDni: userData.nDni,
                    credentials: {
                        username: userData.username,
                        password: userData.password
                    }
                });

                setRegisterSuccess("¡Registro exitoso! Ahora puedes iniciar sesión con tu nueva cuenta.");

                setUserData({
                    name: '',
                    email: '',
                    birthdate: '',
                    nDni: '',
                    username: '',
                    password: ''
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
                <div className={styles.icon}></div>
                <BackButton className={styles.backBtn} url={"/home"}/>
                <form className={styles.form}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Nombre"
                        value={userData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="email" 
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        placeholder="Email" 
                        required
                    />
                    <input 
                        type="text" 
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        placeholder="Usuario" 
                        required
                    />
                    <input 
                        type="password" 
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        placeholder="*************" 
                        required
                    />
                    <input 
                        type="number" 
                        name="nDni"
                        value={userData.nDni}
                        onChange={handleInputChange}
                        placeholder="Número de documento" 
                        required
                    /> 
                    <input 
                        type="datetime-local"
                        name="birthdate"
                        value={userData.birthdate}
                        onChange={handleInputChange}
                        required
                    />
                </form>

                <button onClick={handleRegister} className={styles.btn}>Registrar</button>
                
                {registerError && <p className={styles.errorMessage}>{registerError}</p>}
                {registerSuccess && <p className={styles.successMessage}>{registerSuccess}</p>}
            </div>
        </>
    );
}

export default RegisterSection;
