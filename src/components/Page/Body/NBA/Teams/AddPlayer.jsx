import { InputControl, SelectControl } from '../../Form/FormControls/FormControls';
import Button from '../../Basic/Button/Button';
import styles from './AddPlayer.css';
import { useState } from 'react';
import { usePlayerActions } from '../../../../../State/Hooks/player';

export default function AddPlayer({ teamId }) {
    const [newPlayer, setNewPlayer] = useState({ teamId });
    const { add } = usePlayerActions();

    const handleChange = (e) => setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await add(newPlayer);
        setNewPlayer({});
    };

    return (
        <form className={styles.AddPlayer} onSubmit={handleSubmit}>
            <InputControl 
                name="jersey"
                type="number"
                placeholder={0}
                required
                onChange={handleChange}/>
            <InputControl
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                onChange={handleChange}/>
            <InputControl
                name="lastName" 
                type="text"
                placeholder="Last Name"
                required
                onChange={handleChange}/>
            <SelectControl
                name="pos"
                onChange={handleChange}>
                <option value="">Position</option>
                <option value="G">G</option>
                <option value="G-F">G-F</option>
                <option value="F">F</option>
                <option value="F-C">F-C</option>
                <option value="C">C</option>
            </SelectControl>
            <Button text="+"/>
        </form>
    );
}
