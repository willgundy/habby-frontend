import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.jsx';
import { Toaster } from 'react-hot-toast';
import UserProvider from '../State/Context/UserContext.jsx';


export default function App() {
    return (
        <UserProvider>
            <Toaster />
            <Router>
                <Routes />
            </Router>
        </UserProvider>
    );
}
