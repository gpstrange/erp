// Client

import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { setAuthorizationToken, setCurrentStaff } from '../common/auth';

export function staffLoginRequest(userData) {
    return dispatch => {
        return axios.post('/api/staff/auth', userData).then((response) => {
            const token = response.data.token;
            localStorage.setItem('token', token);

            setAuthorizationToken(token);

            dispatch(setCurrentStaff(jwtDecode(token)));
        });
    }
}