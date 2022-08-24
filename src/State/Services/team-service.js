import { client } from './client.js';

export async function getTeamsWithPlayers() {
    const response = await client.from('nbaTeam').select(`
    id,
    city,
    fullName,
    confName,
    tricode,
    nickname,
    primary,
    secondary,
    players:nbaPlayers(
        id,
        firstName,
        lastName,
        teamId,
        jersey,
        pos
    )
  `);

    return response;
}

export async function removeTeam(id) {
    const response = await client
        .from('nbaTeam')
        .delete()
        .eq('id', id)
        .single();

    return response;
}

export async function addTeam(team) {
    const response = await client
        .from('nbaTeam')
        .insert(team)
        .single();

    return response;
}

export async function updateTeam(team) {
    const response = await client
        .from('nbaTeam')
        .update(team)
        .eq('id', team.id)
        .single();

    return response;
}
