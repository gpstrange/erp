// Client

import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

import { FLASH_MESSAGE_ADD, FLASH_MESSAGE_DELETE } from '../actions/types';

export default (state = [], action = {}) => {
    switch(action.type) {
        case FLASH_MESSAGE_ADD:
            return [
                ...state,

                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text,
                }
            ];

        case FLASH_MESSAGE_DELETE:
            return [];

        default:
            return state;
    }
}