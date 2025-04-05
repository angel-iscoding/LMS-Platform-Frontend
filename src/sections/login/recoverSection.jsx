import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { validate } from '../../helpers/validate';
import style from './loginSection.module.css';
import BackButton from '../../components/buttons/backButton';

const RecoverSection = () => {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [code, setCode] = useState('');

    const handleRecover = async (event) => {
        event.preventDefault();

        const newErrors = validate({ email });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post(
                    'http://localhost:8080/users/recover',
                    { email }
                );
                if (response.data.success) {
                    alert('Se ha enviado un correo para recuperar tu contraseña');
                } else {
                    alert('Error al enviar el correo de recuperación');
                }
            } catch (err) {
                console.error('Error al enviar el correo de recuperación:', err);
                alert('Error al enviar el correo de recuperación. Por favor, inténtalo de nuevo');
            }
        }
    }

    const handleCode = async (event) => {
        event.preventDefault();

        const newErrors = validate({ code });
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post(
                    'http://localhost:8080/users/validate-code',
                    { code }
                );
                if (response.data.success) {
                    alert('Código de recuperación válido. Puedes restablecer tu contraseña.');
                } else {
                    alert('Código de recuperación inválido. Por favor, inténtalo de nuevo');
                }
            } catch (err) {
                console.error('Error al validar el código:', err);
                alert('Error al validar el código. Por favor, inténtalo de nuevo');
            }
        }
    }

    return (
        <>
            <div className={style.container}>
                <BackButton url="/home" />
                <form onSubmit={handleRecover}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className={style.error}>{errors.email}</span>}
                    <button type="submit">Enviar</button>
                </form>

                <form onSubmit={handleCode}>
                    <input
                        type="text"
                        name="code"
                        placeholder="Código de recuperación"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    {errors.code && <span className={style.error}>{errors.code}</span>}
                    <button type="submit">Validar código</button>
                    {}
                </form>
            </div>
        </>
    );
}

export default RecoverSection;