import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/store";
import Search from "../../components/buttons/search";
import ContentCard from "../../components/cards/contentCard";
import style from "./homeSection.module.css";

const HomeSection = () => {
    const user = useSelector(selectUser);
    const [contentData, setContentData] = useState([]);

    useEffect(() => {
        const ContentData = [
            { title: "Mathematics", taken: 16, remaining: 160, color: "FFEFE2", iconSRC: "/assets/icons/Figma Import/Math.png" },
            { title: "Physics", taken: 24, remaining: 120, color: "FDF3FC", iconSRC: "/assets/icons/Figma Import/Book.png" },
            { title: "Chemistry", taken: 60, remaining: 200, color: "F7F9EB", iconSRC: "/assets/icons/Figma Import/Music.png" },
        ];
        setContentData(ContentData);
    }, []);

    return (
        <div className={style.container}>
            <div className={style.top_container}>
                <h1 id={style.title}>My classes</h1>
                <Search/>
            </div>
            <div className={style.container_classes}>
                <ContentCard 
                    title="Your own education way"
                    description="Set your study plan and growth with EduHome."
                    iconSRC="/assets/icons/Figma Import/Hat.png"
                    color="14121F"
                    className={style.card_welcome} 
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
                        className={style.card_classes}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeSection;
