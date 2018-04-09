// Client / Reducers / Auth

import isEmpty from 'lodash/isEmpty';

import { USER_CURRENT_SET, STAFF_CURRENT_SET } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {},
    staff:{}
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case USER_CURRENT_SET:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        case STAFF_CURRENT_SET:
            return {
                isAuthenticated: !isEmpty(action.staff),
                staff: action.staff
            };

        default:
            return state;
    }
}