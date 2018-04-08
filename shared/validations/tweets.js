// Shared / Validations / Tweets

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateTweet(data) {
    let errors = {};
    console.log(data)
    if(Validator.isNull(data)) {
        errors.tweet = 'Tweet cannot be empty.';
    } else if(!Validator.isLength(data, {min: 10})) {
        errors.tweet = 'Reason should be atleast 10 characters long.';
    } else if(!Validator.isLength(data, {max: 160})) {
        errors.tweet = 'Tweet should be less than 160 characters long.';
    } 

    return {
        errors,
        isValid: isEmpty(errors)
    }
}