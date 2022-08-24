import { createContext, useReducer } from 'react';

export const NBAContext = createContext();
export const NBADispatchContext = createContext();

function reducer(list, { type, payload }) {
    switch (type) {
        case 'load':
            return payload;
        case 'add':
            return [...list, payload];
        case 'remove':
            return list.filter(item => item.id !== payload.id);
        case 'update':
            return list.map((item) => (item.id === payload.id ? payload : item));
        default:
            throw Error(`Unknown action: ${type}`);
    }
}

export default function NBAContextProvider({ children }) {
    const [teams, teamsDispatch] = useReducer(reducer, null);
    const [players, playersDispatch] = useReducer(reducer, null);
    return (
        <NBAContext.Provider value={{ teams, players }}>
            <NBADispatchContext.Provider value={{ teamsDispatch, playersDispatch }}>
                {children}
            </NBADispatchContext.Provider>
        </NBAContext.Provider>
    );
}
