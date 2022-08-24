import About from './Page/Body/About/About.jsx';
import Form from './Page/Body/Form/Form.jsx';
import Home from './Page/Body/Home/Home.jsx';
import List from './Page/Body/List/List.jsx';
import Layout from './Page/Layout';
import Teams from './Page/Body/NBA/Teams/Teams.jsx';
import NBA from './Page/Body/NBA/NBA.jsx';
import { Routes as RRoutes, Route, Navigate } from 'react-router-dom';
import ProtectRoutes from './Page/Auth/ProtectRoutes.jsx';
import UserAuth from './Page/Auth/UserAuth.jsx';
import Profile from './Page/Auth/Profile.jsx';

export default function Routes() {
    return (
        <RRoutes>
            <Route path="user/*" element={<UserAuth />} />
            <Route element={<Layout />}>
                <Route element={<ProtectRoutes />}>
                    <Route index element={<Home />} />
                    <Route path="list" element={<List />} />
                    <Route path="about" element={<About />} />
                    <Route path="form" element={<Form />} />
                    <Route path="user/profile" element={<Profile />} />
                    <Route path="nba" element={<NBA />}>
                        <Route index element={<Teams />} />
                    </Route>
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </RRoutes>
    );
}
