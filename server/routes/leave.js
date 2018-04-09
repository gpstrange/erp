// Server / Routes / Tweets

import express from 'express';
import jwtDecode from 'jwt-decode';


import middlewareAuthenticate from '../middlewares/auth';
import { createTweet, getAllTweets } from '../controllers/leave';
// import { getAllTweetsByUsername } from '../repositories/user';
import { validateTweet } from '../../shared/validations/tweets';

let routesTweets = express.Router();

routesTweets.post('/addLeaveRequest', middlewareAuthenticate, (request, response) => {
    let responseData = {
        success: false,
        errors: {}
    };
    console.log(request.body);
    let token = request.headers['authorization'].split(' ')[1];
    let currentUser = jwtDecode(token);
    console.log(currentUser)
    // let { errors, isValid } = validateTweet(request.body);
    if (true) {
        const leaveData = request.body;
        createTweet(currentUser, leaveData, (err, data)=>{
            if(err) {
                response.status(500);
                responseData.errors = err;
                response.json(responseData);
            } else {
                responseData = data;
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
});


routesTweets.get('/getLeaveRequest', (request, response) => {
    let responseData = {
        success: false,
        leaveRequests: [],
        leaveRequestCount: 0,
        errors: {}
    };
    let token = request.headers['authorization'].split(' ')[1];
    let currentUser = jwtDecode(token);
    getAllTweets(currentUser,(err, leaveRequests) => {
        if(err){
            response.status(500);
            responseData.errors = err;
            response.json(responseData);
        } else {
            responseData.success = true;
            responseData.leaveRequests = leaveRequests;
            responseData.leaveRequestCount = leaveRequests.length;
            console.log(responseData.leaveRequestCount)
            response.json(responseData);
        }
    });
})

// routesTweets.get('/user/:username', (request, response) => {
//     let responseData = {
//         success: false,

//         user: [],

//         errors: {}
//     };

//     const { username } = request.params;

//     getAllTweetsByUsername(username)

//         .then((user) => {
//             responseData.success = true;
//             responseData.user = user;

//             response.json(responseData);
//         })

//         .catch((error) => {
//             response.status(500);

//             responseData.errors = error;

//             response.json(responseData);
//         });
// });

export default routesTweets;