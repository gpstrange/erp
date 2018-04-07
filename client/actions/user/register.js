// Client

import axios from 'axios';

export function userRegisterRequest(userData) {
    return dispatch => {
        return axios.post('/api/users', userData).then((response) => {
            const token = response.data.token;

            localStorage.setItem('token', token);

            setAuthorizationToken(token);

            dispatch(setCurrentUser(jwtDecode(token)));
        });
    };
}