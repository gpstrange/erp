// Server / Routes / Users

import express from 'express';
import jwtDecode from 'jwt-decode';

import { checkUsernameAlreadyExists, createUser, getAllEvents } from '../controllers/user';
import { validateUserRegister } from '../../shared/validations/user/register';

let routesUsers = express.Router();

routesUsers.post('/', (request, response) => {
    let responseData = {
        success: false,
        errors: {}
    };
    let userClass = null;
    checkUsernameAlreadyExists(request.body, (err, isTaken) => { 
        if(err) {
            response.status(400);
            responseData.errors = err;
            return response.json(responseData)
         }
        if(!isTaken) {
            let { errors, isValid } = validateUserRegister(request.body);
            if(isValid){
                if (request.body.year && request.body.dept && request.body.section){
                    userClass = request.body.year + request.body.dept + request.body.section;
                    request.body.class = userClass;
                }
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

routesUsers.get('/getEventRequest', (request, response)=>{
    let responseData = {
        success: false,
        errors: {}
    };
    let token = request.headers['authorization'].split(' ')[1];
    let currentUser = jwtDecode(token);
    getAllEvents(currentUser, (err, events) => {
        if (err) {
            response.status(500);
            responseData.errors = err;
            response.json(responseData);
        } else {
            responseData.success = true;
            responseData.events = events;
            responseData.eventCount = events.length;
            console.log(responseData.eventCount)
            response.json(responseData);
        }
    });
})

export default routesUsers;