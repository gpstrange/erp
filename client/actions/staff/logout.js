// Client / Actions / User / Logout

import { setAuthorizationToken, setCurrentStaff } from '../common/auth';

export function staffLogout() {
    return dispatch => {
        localStorage.removeItem('token');

        setAuthorizationToken(false);

        dispatch(setCurrentStaff({}));
    }
}