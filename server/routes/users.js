// Server / Routes / Users

import express from 'express';

import { checkUsernameAlreadyExists, createUser } from '../controllers/user';
import { validateUserRegister } from '../../shared/validations/user/register';

let routesUsers = express.Router();

routesUsers.post('/', (request, response) => {
    let responseData = {
        success: false,
        errors: {}
    };
    console.log(request.body);
    checkUsernameAlreadyExists(request.body, (err, isTaken) => { 
        console.log(isTaken);
        console.log(errors);
        responseData.success = isTaken;
        responseData.errors = errors;
        if(!isTaken) {
            let { errors, isValid } = validateUserRegister(request.body);
            if(isValid){
                createUser(request.body, (err, responseData) => {
                    if(err){
                        response.status(500);
                        responseData.errors = error;
                        response.json(responseData);
                    } else {
                        responseData.success = true;
                        response.status(201); // created status
                        response.json(responseData);
                    }
                    })
            } else {
                response.status(400);
                responseData.errors = errors;
                response.json(responseData);
            }
        } else {
            response.status(400);
            response.json(responseData);
        }
    });
});

export default routesUsers;