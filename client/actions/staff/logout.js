// Client / Actions / User / Logout

import { setAuthorizationToken, setCurrentUser } from '../common/auth';

export function staffLogout() {
    return dispatch => {
        localStorage.removeItem('token');

        setAuthorizationToken(false);

        dispatch(setCurrentUser({}));
    }
}