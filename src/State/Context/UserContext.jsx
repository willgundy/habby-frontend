import { createContext, useEffect, useState } from 'react';
import { getLocalProfile, getProfile, getUser, onAuthChange, removeLocalProfile, saveLocalProfile } from '../Services/user-service.js';


export const UserStateContext = createContext();
export const UserActionContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(getUser());
    const [profile, setProfile] = useState(getLocalProfile());

    const loadProfile = async () => {
        const { data, error } = await getProfile();
        if (error) {
            setProfile(null);
        }
        if (data) {
            setProfile(data);
            saveLocalProfile(data);
        }
    };

    useEffect(() => {
        if (user) loadProfile();

        const { data } = onAuthChange((event) => {
            if (event == 'SIGNED_IN') loadProfile();
            if (event == 'SIGNED_OUT') {
                setUser(null);
                setProfile(null);
                removeLocalProfile();
            }
        });

        return () => data;
    }, []);

    return (
        <UserStateContext.Provider value={{ user, profile }}>
            <UserActionContext.Provider value={{ setUser, setProfile }}>
                {children}
            </UserActionContext.Provider>
        </UserStateContext.Provider>
    );
}
