import styles from './search.module.css';

const Search = ({ onClick }) => {
    return (
        <form className={styles.search}>
            <img
                src="/assets/icons/Figma Import/Search.png"
                alt="search"
                width={24}
                className={styles.search_icon}/>
            <input 
                onClick={onClick}   
                type="text" 
                placeholder='Search'
            />
        </form>
    );
}

export default Search;