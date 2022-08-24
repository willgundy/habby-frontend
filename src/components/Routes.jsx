import About from './Pages/Body/About/About.jsx';
import Home from './Pages/Body/Home/Home.jsx';
import Progress from './Pages/Body/Progress/Progress.jsx';
import Layout from './Pages/Layout';
import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import ProtectRoutes from './Pages/Auth/ProtectRoutes.jsx';
import UserAuth from './Pages/Auth/UserAuth.jsx';
import Profile from './Pages/Auth/Profile.jsx';

export default function Routes() {
    return (
        <RRoutes>
            <Route path="user/*" element={<UserAuth />} />
            <Route element={<Layout />}>
                <Route element={<ProtectRoutes />}>
                    <Route index element={<Home />} />
                    <Route path="list" element={<Progress />} />
                    <Route path="about" element={<About />} />
                    <Route path="user/profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </RRoutes>
    );
}
