import { useState } from 'react';
import Navigation from './Navigation.jsx';
import styles from './Menu.css';
import classNames from 'classnames';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const className = classNames(styles.Menu, {
        [styles.Open]: isOpen,
    });

    const handleClick = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    const nav = [
        { to: '/', label: 'Home' },
        { to: 'list', label: 'List' },
        { to: 'nba', label: 'NBA' },
        { to: 'about', label: 'About' },
        { to: 'form', label: 'Form' },
    ];

    return (
        <button className={className} onClick={handleClick}>
            <div className={styles.MenuContainer}>
                <Navigation navigation={nav}/>
            </div>
        </button>
    );
}

