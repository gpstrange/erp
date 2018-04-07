// Server / Routes / Auth

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

var mysql = require("mysql");
var dbconfig = require("../configs/database");
var connection = mysql.createConnection(dbconfig.connection);
connection.query("USE " + dbconfig.database);

import serverConfig from '../configs/server';

let routesAuth = express.Router();

routesAuth.post('/', (request, response) => {
    let responseData = {
        success: false,
        token: '',
        errors: {}
    };
    console.log(request.body);
    const { username, password } = request.body;
    connection.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        function (err, rows) {
            if(rows[0]) {
                if(bcrypt.compareSync(password, rows[0].password)) {
                    responseData.token = jwt.sign({
                        id: rows[0].id,
                        username: rows[0].username,
                        name: rows[0].name,
                        dept: rows[0].dept,
                        phone: rows[0].phone
                    }, serverConfig.secret);
                    console.log(responseData.token);
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

export default routesAuth;