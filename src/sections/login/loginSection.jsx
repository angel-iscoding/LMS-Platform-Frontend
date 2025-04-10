import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        document.title = "Iniciar sesión - Virtual Classes";
    }, []);

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
                <div className={style.icon}>
                    <img src="/assets/icons/Figma Import/Logo.png " alt="" />
                </div>
                <form className={style.form}>
                    <div className={style.form_group}>
                        <div className={style.form_container_icon}>
                            <img src="/assets/icons/Figma Import/User.png" alt="" width={34}/>
                        </div>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                            placeholder="Usuario"
                            required
                        />
                    </div>

                    <div className={style.form_group}>
                        <div className={style.form_container_icon}>
                            <img src="/assets/icons/Figma Import/Lock.png" alt="" width={36}/>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                            placeholder="Contraseña"
                            required
                        />    
                    </div>                    
                </form>

                <div className={style.links}>
                        <a id={style.register} onClick={() => navigate("/home/register")}>
                            Registrate
                        </a>
                    

                        <a id={style.recover} onClick={() => navigate("/home/recover")}>
                            ¿Olvidaste tu contraseña?
                        </a>
                </div>
                
                <button onClick={handleLogin} className={style.btn}>Iniciar sesión</button>
                
                {loginError && <p className={style.errorMessage}>{loginError}</p>}
            </div>
        </>
    );
};

export default LoginSection;
