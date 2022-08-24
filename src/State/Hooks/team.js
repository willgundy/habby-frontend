import { useContext, useEffect, useState } from 'react';
import { NBAContext, NBADispatchContext } from '../Context/NBAContext';
import { addTeam, getTeamsWithPlayers, removeTeam, updateTeam } from '../Services/team-service';
import { showError, showSuccess } from '../Services/toaster';

export function useTeams() {
    const [error, setError] = useState(null);
    const { teams } = useContext(NBAContext);
    const { teamsDispatch } = useContext(NBADispatchContext);

    useEffect(() => {
        if (teams) return;
        //figure out ignore use case

        const fetchTeams = async () => {
            const { data, error } = await getTeamsWithPlayers();
            if (error) {
                setError(error);
            }
            if (data) {
                teamsDispatch({ type: 'load', payload: data });
            }
        };

        fetchTeams();
    }, []);

    return { error, teams };
}

export function useTeamActions() {
    const { teamsDispatch } = useContext(NBADispatchContext);

    const add = async (team) => {
        const { data, error } = await addTeam(team);
        if (error) {
            showError(error.message);
        }
        if (data) {
            teamsDispatch({ type: 'add', payload: data });
            showSuccess(`Added ${data.fullName} successfully`);
        }
    };

    const remove = async (id) => {
        const { data, error } = await removeTeam(id);
        if (error) {
            showError(error.message);
        }
        if (data) {
            teamsDispatch({ type: 'remove', payload: data });
            showSuccess(`Removed ${data.fullName} successfully`);
        }
    };

    const update = async (team) => {
        const { data, error } = await updateTeam(team);
        if (error) {
            showError(error.message);
        }
        if (data) {
            teamsDispatch({ type: 'update', payload: data });
            showSuccess(`Updated ${data.fullName} successfully`);
        }
    };

    return { add, remove, update };
}
