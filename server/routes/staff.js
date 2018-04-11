// Server / Routes / Auth

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';
import jwtDecode from 'jwt-decode';

var mysql = require("mysql");
var dbconfig = require("../configs/database");
var connection = mysql.createConnection(dbconfig.connection);
connection.query("USE " + dbconfig.database);

import { checkUsernameAlreadyExists, createUser, addEventHandler } from '../controllers/staff';
import { validateUserRegister } from '../../shared/validations/user/register';

import serverConfig from '../configs/server';

let routesStaff = express.Router();

routesStaff.post('/auth', (request, response) => {
    let responseData = {
        success: false,
        token: '',
        errors: {}
    };
    const { username, password } = request.body;
    connection.query(
        "SELECT * FROM staffs WHERE username = ?",
        [username],
        function (err, rows) {
            if (rows[0]) {
                if (bcrypt.compareSync(password, rows[0].password)) {
                    responseData.token = jwt.sign({
                        id: rows[0].id,
                        type: 'staff',
                        userType: rows[0].type,
                        username: rows[0].username,
                        name: rows[0].name,
                        dept: rows[0].dept,
                        class: rows[0].class,
                        phone: rows[0].phone
                    }, serverConfig.secret);
                    responseData.success = true;
                } else {
                    response.status(401);
                    responseData.errors.form = 'The password you entered is invalid.';
                }
            } else {
                response.status(401);
                responseData.errors.form = 'User with such username does not exists.';
            }
            return response.json(responseData);
        });
});

routesStaff.post('/signUp', (request, response) => {
    let responseData = {
        success: false,
        errors: {}
    };
    checkUsernameAlreadyExists(request.body, (err, isTaken) => {
        if (err) {
            response.status(400);
            responseData.errors = err;
            return response.json(responseData)
        }
        if (!isTaken) {
            let { errors, isValid } = validateUserRegister(request.body);
            if (isValid) {
                createUser(request.body, (err, result) => {
                    if (err) {
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

routesStaff.post('/addEvent', (request, response)=>{
    let responseData = {
        success: false,
        errors: {}
    };
    let token = request.headers['authorization'].split(' ')[1];
    let currentUser = jwtDecode(token);
    if(currentUser.type === 'staff' && !isEmpty(request.body)){
        addEventHandler(currentUser, request.body, (err, result)=>{
            if (err) {
                response.status(500);
                responseData.success = false;
                responseData.errors.form = "Event Creation failed";
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
        responseData.errors.form = "Unauthorised user";
        response.json(responseData);
    }
})

export default routesStaff;