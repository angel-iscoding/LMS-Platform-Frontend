import style from './profileCard.module.css';

const ProfileCard = ({ imgURL, name, profession, className}) => {
    return (
        <div className={`${className} ${style.container}`}>
            
                <div className={style.profile}>
                    <div className={style.backgroundImg}>
                        <div className={style.img}></div>
                    </div>
                </div>
                <div className={style.text}>
                    <h4>{name}</h4>
                    <p>{profession}</p>
                </div>
            
            <div className={style.information}>
                <div>
                    <p className={style.title }>24</p>
                    <p className={style.description}>Courses</p>
                </div>
                <div>
                    <p className={style.title }>82%</p>
                    <p className={style.description}>Completion</p>
                </div>
                <div>
                    <p className={style.title }>8</p>
                    <p className={style.description}>Certificates</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;