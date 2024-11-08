import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { validate } from "../../helpers/validate";
import style from "./loginSection.module.css";

const LoginSection = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value,
        });

        const newErrors = validate({
            ...userData,
            [name]: value,
        });
        setErrors(newErrors);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        const newErrors = validate(userData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post(
                    "http://localhost:8080/users/login",
                    {
                        username: userData.username,
                        password: userData.password,
                    }
                );
                if (response.data.login) {
                    dispatch(setUser(response.data.user)); 
                    navigate("/dashboard");
                } else {
                    setLoginError("Usuario o contraseña incorrectos");
                }
            } catch (err) {
                console.error("Error al iniciar sesión:", err);
                setLoginError("Error al iniciar sesión. Por favor, inténtalo de nuevo");
            }
        }
    };

    return (
        <>
            <div className={style.container}>
                <p id={style.bienvenida}>¡Bienvenid@ de vuelta!</p>

                <h2 id={style.titulo}>Inicia sesión</h2>

                <form className={style.form}>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        placeholder="Ingresa tu usuario"
                        required
                    />

                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        placeholder="************"
                        required
                    />
                </form>

                <p id={style.registrar}>
                    ¿Eres nuevo?,{" "}
                    <a href="#" onClick={() => navigate("/register")}>
                        ¡Regístrate!
                    </a>
                </p>

                <button onClick={handleLogin} className={style.btn}>Iniciar sesión</button>
                
                {loginError && <p className={style.errorMessage}>{loginError}</p>}
            </div>
        </>
    );
};

export default LoginSection;
