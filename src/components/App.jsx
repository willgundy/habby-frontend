import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.jsx';
import NBAContextProvider from '../State/Context/NBAContext.jsx';
import { Toaster } from 'react-hot-toast';
import UserProvider from '../State/Context/UserContext.jsx';


export default function App() {
    return (
        <UserProvider>
            <NBAContextProvider>
                <Toaster />
                <Router>
                    <Routes />
                </Router>
            </NBAContextProvider>
        </UserProvider>
    );
}
