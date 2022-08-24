import { useState } from 'react';
import { useProfile } from '../../../State/Hooks/user';
import Section from '../Body/Global/Section/Section';
import Button from '../Body/Global/Button/Button.jsx';
import { InputControl } from '../Body/Global/Form/FormControls/FormControls';
import styles from './Profile.css';
import { getUser } from '../../../State/Services/user-service';

export default function Profile() {
    const [profile, updateProfile] = useProfile();
    const [user,] = useState(getUser());
    const [formProfile, setFormProfile] = useState({ id: user.id });

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(formProfile);
    };

    const handleChange = (e) => setFormProfile({ ...formProfile, [e.target.name]: e.target.value });

    const handleImageUpload = (e) => {
        setFormProfile({ ...formProfile, [e.target.name]: e.target.files[0] });
    };

    return (
        <div className={styles.Profile}>
            <Section header={'Create Profile'} width="50vw">
                <form onSubmit={handleSubmit}>
                    <InputControl
                        label="User Name"
                        name="username"
                        required
                        placeholder="Enter a User Name"
                        defaultValue={profile && profile.username}
                        onChange={handleChange}
                    />
                    <InputControl
                        label="Avatar"
                        name="avatar"
                        type="file"
                        required
                        onChange={handleImageUpload}
                    />

                    <Button text={'Submit Profile'} marginTop={'20px'}/>

                </form>
            </Section>
        </div>
    );
}
