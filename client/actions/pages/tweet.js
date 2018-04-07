// Client

import axios from 'axios';

export function tweetRequest(tweet) {
    return dispatch => {
        return axios.post('/api/tweets/addLeaveRequest', tweet);
    }
}

export function tweetGetRequest(page) {
    return dispatch => {
        return axios.get(`/api/tweets/getLeaveRequest`);
    }
}

export function tweetGetByUsernameRequest(username) {
    return dispatch => {
        return axios.get(`/api/tweets/user/${ username }`);
    }
}
