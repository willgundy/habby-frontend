import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './User.css';
import { useAuthActions, useUser } from '../../../State/Hooks/user';

// eslint-disable-next-line react/prop-types
export default function User({ username }) {
    const [isOpen, setIsOpen] = useState(false);
    // eslint-disable-next-line react/prop-types
    const [initial, setInitial] = useState(username.substring(0, 1));
    const { signOut } = useAuthActions();
    const { profile } = useUser();

    const className = classNames(styles.User, {
        [styles.Open]: isOpen,
    });

    const handleClick = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    useEffect(() => {
        setInitial(profile && profile.username.substring(0, 1));
    }, []);

    return (
        <div className={className}>
            <div onClick={handleClick} className={styles.UserIcon}>
                {profile ? 
                    <img src={profile.avatar} alt={profile.username} className={styles.ProfileImage} />
                    : <div className={styles.ProfileImage}>{initial}</div>}
                {profile ? profile.username : username}
            </div>
            <div className={styles.UserMenu}>
                <Link 
                    className={styles.UserMenuItem} 
                    to="user/profile" 
                    onClick={handleClick}>
            Profile
                </Link>
                <Link 
                    className={styles.UserMenuItem} 
                    to="user" 
                    onClick={signOut}>
            Sign Out
                </Link>
            </div>
        </div>
    );
}
