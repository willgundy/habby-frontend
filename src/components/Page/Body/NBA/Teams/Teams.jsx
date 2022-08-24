import { useState } from 'react';
import { useTeamActions } from '../../../../../State/Hooks/team';
import Button from '../../Basic/Button/Button';
import { InputControl } from '../../Form/FormControls/FormControls';
import TeamList from './TeamList.jsx';
import styles from './Teams.css';

export default function Teams() {
    const [fullName, setFullName] = useState('');
    const { add } = useTeamActions();

    const handleChange = (e) => setFullName(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await add({ fullName });
        setFullName('');
    };

    return (
        <div>
            <form className={styles.AddTeam} onSubmit={handleSubmit}>
                <InputControl 
                    label="Add an NBA Team"
                    name="NBA Team" 
                    value={name}
                    onChange={handleChange}/>
                <Button text="Create Team" width={'200px'} />
            </form>
            <TeamList />
        </div>
    );
}
