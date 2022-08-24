import { useRef, useState } from 'react';
import styles from './PlayerPill.css';
import { usePlayerActions } from '../../../../../State/Hooks/player';

export default function PlayerPill({ player }) {
    const [dragging, setDragging] = useState(false);
    const { update } = usePlayerActions();

    const dragPill = useRef();

    const handleDelete = () => update({ ...player, teamId: null });

    const handleDragStart = (e) => {
        setDragging(true);
        dragPill.current = e.target;
        dragPill.current.addEventListener('dragend', handleDragEnd);
        console.log('drag start', player);
    };

    const handleDragEnd = (e) => {
        console.log('drag end', e.target);
        setDragging(false);
        dragPill.current.removeEventListener('dragend', handleDragEnd);
        dragPill.current = dragging;
    };

    return (
        <span draggable 
            id={player.id}
            onDragStart={(e) => handleDragStart(e, player)}
            className={styles.PlayerPill}>
            <p>{`#${player.jersey}`}</p>
            <p className={styles.PlayerName}>{`${player.firstName} ${player.lastName}`}</p>
            <p>{player.pos}</p>
            <span onClick={handleDelete}>ⓧ</span>
        </span>
    );
}
