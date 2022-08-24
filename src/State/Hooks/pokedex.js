import { useEffect, useState } from 'react';
import { getPokedex, getPokemonTypes } from '../Services/pokedex-service';

export function pokedex(searchParams) {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);



    const fetchPokedex = async () => {
        const res = await getPokedex(searchParams, page);

        if (res.data) {
            setCount(res.data.count);
            setError(null);

            if (page === 1) {
                setData(res.data.results);
            } else {
                setData((data) => [...data, ...res.data.results]);
            }
        }

        if (res.error) {
            setError(error);
        }
    };

    //reset the page if the search parameters are changed
    useEffect(() => {
        setPage(1);
    }, [searchParams.toString()]);
    
    useEffect(() => {
        fetchPokedex();
    }, [searchParams.toString(), page]);

    const addPage = () => {
        setPage((page) => page + 1);
    };

    return { error, data, count, addPage };
}

export function useTypes() {
    const [error, setError] = useState(null);
    const [types, setTypes] = useState(null);

    const fetchTypes = async () => {
        const res = await getPokemonTypes();

        if (res.data) {
            setTypes(res.data);
            setError(null);
        }

        if (res.error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchTypes();
    }, []);

    return { error, types };
}
