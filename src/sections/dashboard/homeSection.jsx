import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/store";
import Search from "../../components/buttons/search";
import ContentCard from "../../components/cards/contentCard";
import TaskCard from "../../components/cards/taskCard"; // Importa el componente TaskCard
import SmallCalendar from "../../components/panel/smallCalendar";
import style from "./homeSection.module.css";

// Mock data para las clases
const mockContentData = [
    {
        title: "Mathematics",
        taken: 16,
        remaining: 160,
        color: "FFEFE2",
        iconSRC: "/assets/icons/Figma Import/Math.png",
    },
    {
        title: "Physics",
        taken: 24,
        remaining: 120,
        color: "FDF3FC",
        iconSRC: "/assets/icons/Figma Import/Book.png",
    },
    {
        title: "Chemistry",
        taken: 60,
        remaining: 200,
        color: "F7F9EB",
        iconSRC: "/assets/icons/Figma Import/Music.png",
    },
];

// Mock data para las tareas
const mockTaskData = [
    {
        iconSRC: "/assets/icons/Figma Import/Book.png",
        text: "Make points on their places",
        description: "Geography - Juan Gabriel - Task",
        done: true,
    },
    {
        iconSRC: "/assets/icons/Figma Import/Book.png",
        text: "Make a research",
        description: "Politology - Juan Gabriel - Task",
        done: true,
    },
    {
        iconSRC: "/assets/icons/Figma Import/Book.png",
        text: "Learn new parts",
        description: "Anatomy - Juan Gabriel - Theory",
        done: false,
    },
];

const HomeSection = () => {
    const user = useSelector(selectUser);
    const [contentData, setContentData] = useState([]);
    const [taskData, setTaskData] = useState([]); // Estado para las tareas
    const [selectedTaskOption, setSelectedTaskOption] = useState("All");

    // Simula la obtención de datos desde una API
    useEffect(() => {
        setContentData(mockContentData); // Asigna la mock data de clases al estado
        setTaskData(mockTaskData); // Asigna la mock data de tareas al estado
    }, []);

    const handleTaskOptionClick = (option) => {
        setSelectedTaskOption(option);
    };

    // Filtra las tareas según la opción seleccionada
    const filteredTasks = taskData.filter((task) => {
        if (selectedTaskOption === "All") return true;
        if (selectedTaskOption === "Completed") return task.done;
        if (selectedTaskOption === "Pending") return !task.done;
        return true;
    });

    return (
        <div className={style.container}>
            <div className={style.left}>
                <h1 id={style.title}>My classes</h1>
                <div className={style.classCards}>
                    <ContentCard 
                        title="Your own education way"
                        description="Set your study plan and growth with EduHome."
                        iconSRC="/assets/icons/Figma Import/Hat.png"
                        color="14121F"
                        className={style.class} 
                        isDark={true}
                    />

                    {contentData.slice(0, 3).map((content, index) => (
                        <ContentCard
                            key={index}
                            title={content.title}
                            taken={content.taken}
                            remaining={content.remaining}
                            iconSRC={content.iconSRC}
                            color={content.color}
                            className={style.class}
                        />
                    ))}
                </div>
                <h2>Today's Task</h2>
                <div className={style.taskTab}>
                    <div className={style.taskCategory}>
                        <h3 className={style.title}>My Tasks</h3>
                        <div className={style.taskOptions}>
                            <button
                                className={`${style.taskOption} ${selectedTaskOption === "All" ? style.selected : ""}`}
                                onClick={() => handleTaskOptionClick("All")}
                            >
                                All
                            </button>
                            <button
                                className={`${style.taskOption} ${selectedTaskOption === "Completed" ? style.selected : ""}`}
                                onClick={() => handleTaskOptionClick("Completed")}
                            >
                                Completed
                            </button>
                            <button
                                className={`${style.taskOption} ${selectedTaskOption === "Pending" ? style.selected : ""}`}
                                onClick={() => handleTaskOptionClick("Pending")}
                            >
                                Pending
                            </button>
                        </div>
                    </div>
                    <div className={style.taskItems}>
                        {filteredTasks.map((task, index) => (
                            <TaskCard
                                key={index}
                                iconSRC={task.iconSRC}
                                text={task.text}
                                description={task.description}
                                done={task.done}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.search}>
                    <Search/>
                </div>
                <div className={style.calendar}>
                    <h3 id={style.events} className={style.title}>New Events</h3>
                    <SmallCalendar/>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;
