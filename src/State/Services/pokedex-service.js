const API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

export async function getPokedex(searchParams, page) {
    const res = await fetch(`${API_URL}?${searchParams.toString()}&page=${page}`);
    const body = await res.json();

    return {
        data: res.ok ? body : null,
        error: res.ok ? null : body,
    };
}

export async function getPokemonTypes() {
    const res = await fetch(`${API_URL}/types`);
    const body = await res.json();

    return {
        data: res.ok ? body : null,
        error: res.ok ? null : body,
    };
}

