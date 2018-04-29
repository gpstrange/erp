// Client

import axios from 'axios';

export function tweetRequest(tweet) {
    return dispatch => {
        return axios.post('/api/leaves/addLeaveRequest', tweet);
    }
}

export function tweetGetRequest(page) {
    return dispatch => {
        return axios.get(`/api/leaves/getLeaveRequest`);
    }
}

export function tweetGetByUsernameRequest(username) {
    return dispatch => {
        return axios.get(`/api/leaves/user/${ username }`);
    }
}

// export function acceptLeaveRequest(leaveId) {
//     return ;
// }