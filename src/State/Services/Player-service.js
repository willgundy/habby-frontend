import { client } from './client.js';

export async function getAllPlayers() {
    const response = await client
        .from('nbaPlayers')
        .select('*');

    return response;
}

export async function removePlayer(id) {
    const response = await client
        .from('nbaPlayers')
        .delete()
        .eq('id', id)
        .single();

    return response;
}

export async function addPlayer(player) {
    const response = await client
        .from('nbaPlayers')
        .insert(player)
        .single();

    return response;
}

export async function updatePlayer(player) {
    const response = await client
        .from('nbaPlayers')
        .update(player)
        .eq('id', player.id)
        .single();

    return response;
}
