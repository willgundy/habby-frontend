import styles from './AuthForm.css';
import { Link } from 'react-router-dom';
import Section from '../Body/Global/Section/Section.jsx';
import Button from '../Body/Global/Button/Button.jsx';
import { InputControl } from '../Body/Global/Form/FormControls/FormControls';
import { useState } from 'react';

export default function AuthForm({ header, button, prompt, link, onSubmit }) {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(credentials.email, credentials.password);
    };

    const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

    return (
        <Section header={header} width="40vw">
            <form onSubmit={handleSubmit} className={styles.AuthForm}>
                <InputControl
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="email"
                    onChange={handleChange}
                />
                <InputControl
                    label="Password"
                    name="password"
                    type="password"
                    required
                    placeholder="password"
                    onChange={handleChange}
                />

                <Button text={button} marginTop={'20px'}/>

                <Link to={link} className={styles.SubHeader}>{prompt}</Link>
            </form>
        </Section>
    );
}
