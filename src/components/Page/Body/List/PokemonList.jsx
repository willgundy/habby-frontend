import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '../Basic/Card/Card';
import styles from './List.css';

export default function PokemonList({ pokemon, onLoadNext }) {
    const { ref, inView } = useInView();

    useEffect(() => {
        if (!inView) return;
        onLoadNext();
    }, [inView]);

    return (
        <div className={styles.List}>
            {pokemon.map((poke, i) => (
                <Card key={i} 
                    image={poke.url_image} 
                    header={poke.pokemon}
                    loadRef={i === pokemon.length - 2 ? ref : null}>
                    {poke.type_1 !== 'NA' && <span>{poke.type_1}</span>}
                    {poke.type_2 !== 'NA' && <span>{poke.type_2}</span>}
                </Card>
            ))}
        </div>
    );
}
