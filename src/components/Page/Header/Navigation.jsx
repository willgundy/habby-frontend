import { Link } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation({ navigation }) {
    return (
        <nav className={styles.Navigation}>
            {navigation.map(({ to, label }) => (
                <Link key={to} to={to}>
                    {label}
                </Link>
            ))}
        </nav>
    );
}

