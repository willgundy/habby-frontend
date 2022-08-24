import { useContext } from 'react';
import { signInService, signUpService, signOutService, uploadAvatar, upsertProfile } from '../Services/user-service';
import { showError, showSuccess } from '../Services/toaster';
import { UserStateContext, UserActionContext } from '../Context/UserContext';

export function useUser() {
    const { user, profile } = useContext(UserStateContext);
    return { user, profile };
}

export function useAuthActions() {
    const { setUser } = useContext(UserActionContext);

    const signIn = async (email, password) => {
        const { data, error } = await signInService(email, password);
        if (error) {
            showError(error.message);
        }
        if (data) {
            setUser(data);
            showSuccess('Signed in successfully');
        }
    };

    const signUp = async (email, password) => {
        const { data, error } = await signUpService(email, password);
        if (error) {
            showError(error.message);
        }
        if (data) {
            setUser(data);
            showSuccess('Signed up successfully');
        }
    };

    const signOut = async () => {
        const { data, error } = await signOutService();
        if (error) {
            showError(error.message);
        }
        if (data) {
            setUser(null);
            showSuccess('Signed out successfully');
        }
    };

    return { signIn, signUp, signOut };
}

export function useProfile() {
    const { user, profile } = useContext(UserStateContext);
    const { setProfile } = useContext(UserActionContext);

    const updateProfile = async ({ avatar, ...profile }) => {

        const { url, error } = await uploadAvatar(user.id, avatar);
        if (error) showError(error.message);
        if (url) showSuccess('Avatar uploaded successfully');

        const { data, error2 } = await upsertProfile({ ...profile, avatar: url });
        if (error2) showError(error2.message);
        if (data) setProfile(data);
    };

    return [profile, updateProfile];
}
