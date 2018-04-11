
import axios from 'axios';

export function addEventRequest(event) {
    return dispatch => {
        return axios.post('/api/staff/addEvent', event);
    }
}