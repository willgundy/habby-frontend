import { Route, Routes } from 'react-router-dom';
import AuthForm from './AuthForm';
import styles from './Auth.css';
import { useAuthActions } from '../../../State/Hooks/user';

export default function Auth() {
    const { signIn, signUp } = useAuthActions();

    const signUpData = {
        header: 'Create a new account',
        button: 'Sign Up',
        prompt: 'Already have an account?',
        link: '../',
        onSubmit: signUp
    };
    
    const signInData = {
        header: 'Sign in to your account',
        button: 'Sign In',
        prompt: 'Need to create an account?',
        link: 'sign-up',
        onSubmit: signIn
    };

    return (
        <section className={styles.Auth}>
            <Routes>
                <Route index element={<AuthForm {...signInData} />} />
                <Route path="sign-up" element={<AuthForm {...signUpData} />} />
            </Routes>
        </section>
    );
}

