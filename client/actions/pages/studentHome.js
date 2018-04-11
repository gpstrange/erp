import axios from 'axios';

export function eventGetRequest(page) {
    return dispatch => {
        return axios.get(`/api/users/getEventRequest`);
    }
}