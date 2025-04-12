import React, { useState } from 'react';
import styles from './taskCard.module.css';

const TaskCard = ({ iconSRC, text, description, done: initialDone }) => {
    const [done, setDone] = useState(initialDone); // Estado local para manejar el estado de la tarea

    const toggleDone = () => {
        setDone((prevDone) => !prevDone); // Cambia el estado entre true y false
    };

    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <img src={iconSRC} alt="" width={40}/>
            </div>
            <div className={styles.text}>
                <h3>{text}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.done}>
                {done ? (
                    <div className={styles.completed}>
                        <p>✔ Task Completed</p>
                    </div>
                ) : (
                    <div className={styles.incomplete}>
                        <p>✖ Task Incomplete</p>
                    </div>
                )}
                <button className={styles.toggleButton} onClick={toggleDone}>
                    {done ? "Mark as Incomplete" : "Mark as Complete"}
                </button>
            </div>
        </div>
    );
};

export default TaskCard;