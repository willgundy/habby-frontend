import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../../State/Hooks/user';

export default function ProtectRoutes() {
    const { user } = useUser();
    if (!user) return <Navigate to="user" />;
    return <Outlet />;
}
