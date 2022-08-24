import { Navigate } from 'react-router-dom';
import { useUser } from '../../../State/Hooks/user';
import Auth from './Auth';
import Profile from './Profile';

export default function UserAuth() {
    const { user, profile } = useUser();

    if (user && profile) return <Navigate to={'/'} />;

    return (
        <>
            {user ? <Profile /> : <Auth />}
        </>
    );
}
