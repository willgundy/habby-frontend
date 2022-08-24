import styles from './Header.css';
import Menu from './Menu';
import Navigation from './Navigation';
import User from './User';

const nav = [
    { to: '/', label: 'Home' },
    { to: 'list', label: 'List' },
    { to: 'nba', label: 'NBA' },
    { to: 'about', label: 'About' },
    { to: 'form', label: 'Form' },
];

export default function Header() {
    return (
        <header className={styles.Header}>
            <div className={styles.MenuContainer}>
                <Menu />
            </div>

            <h1>My React App</h1>

            <div className={styles.NavigationContainer}>
                <Navigation navigation={nav} />
            </div>

            <User username={'Will'}/>
        </header>
    );
}
