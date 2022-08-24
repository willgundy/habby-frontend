import { Outlet } from 'react-router-dom';
import Navigation from '../../Header/Navigation';
import Section from '../Basic/Section/Section';
import styles from './NBA.css';

const navigation = [
    { to: '', label: 'Teams' }
];

export default function NBA() {
    return (
        <>
            <header className={styles.subHeader}>
                <Navigation navigation={navigation} />
            </header>
            <Section className={styles.NBA}>
                <p>Double click on name to edit. Can only delete created teams because of a dependency, working on fixing.</p>
                <Outlet></Outlet>
            </Section>
        </>

    );
}
