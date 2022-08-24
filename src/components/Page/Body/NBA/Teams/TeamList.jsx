import { useTeams } from '../../../../../State/Hooks/team';
import TeamCard from './TeamCard';
import styles from './TeamList.css';

export default function TeamList() {
    const { teams } = useTeams();

    if (!teams) {
        return null;
    }

    return (
        <ul className={styles.TeamList}>
            {teams.map(team => (
                <TeamCard team={team} key={team.id} />
            ))}
        </ul>
    );
}
