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
        if(err) {
            response.status(400);
            responseData.errors = err;
            return response.json(responseData)
         }
        console.log(isTaken);
        if(!isTaken) {
            let { errors, isValid } = validateUserRegister(request.body);
            if(isValid){
                createUser(request.body, (err, result) => {
                    if(err){
                        response.status(500);
                        responseData.success = false;
                        responseData.errors.form = "Creation failed";
                        response.json(responseData);
                    } else {
                        responseData = result;
                        responseData.success = true;
                        response.status(201); // created status
                        response.json(responseData);
                    }
                    })
            } else {
                response.status(400);
                responseData.success = false;
                responseData.errors = errors;
                response.json(responseData);
            }
        } else {
            response.status(400);
            responseData.success = false;
            responseData.errors.form = "Username already taken"; 
            response.json(responseData);
        }
    });
});

export default routesUsers;