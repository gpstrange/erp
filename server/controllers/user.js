// Server / Repositories / User

import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
var mysql = require("mysql");
var dbconfig = require("../configs/database");
var connection = mysql.createConnection(dbconfig.connection);
connection.query("USE " + dbconfig.database);

import serverConfig from '../configs/server';

export function checkUsernameAlreadyExists(data, cb) {
    let errors = {};
    connection.query(
        "SELECT * FROM users WHERE username = ?",
        [data.username],
        function (err, rows) {
            if (err) return cb(err);
            if (rows.length) {
                return cb(null, true)
            } else {
                return cb(null, false);
            } 
        }
    )
}

export function createUser(newUserMysql, cb) {
    // Encrypt password
    const passwordEncrypted = bcrypt.hashSync(newUserMysql.password, serverConfig.saltRounds);
    var insertQuery =
        "INSERT INTO users ( username, password, address, name, email, dept, dob, phone, community, bloodGroup, aadharNumber, role, class ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    connection.query(
        insertQuery,
        [
            newUserMysql.username,
            passwordEncrypted,
            newUserMysql.address,
            newUserMysql.name,
            newUserMysql.email,
            newUserMysql.dept,
            newUserMysql.dob,
            newUserMysql.phone,
            // new Date().toJSON().slice(0, 10) + req.file.originalname,
            newUserMysql.community,
            newUserMysql.bloodGroup,
            newUserMysql.aadharNumber,
            newUserMysql.role,
            newUserMysql.class
        ],
        function (err, rows) {
            if (err) return cb(err);
            newUserMysql.id = rows.insertId;
            return cb(null, rows);
        }
    );
}

export function getAllEvents(user, cb) {
    var query;
    if(user){
        query = `SELECT * from college_events
         WHERE createdUserType = 'PRINCIPAL' OR
         createdUserType = 'HOD' AND dept = '${user.dept}' OR
         createdUserType = 'ADVISOR' AND class = '${user.class}'
         ORDER BY createdAt DESC`;
    }
    connection.query(query, (err, rows)=>{
        if (err) return cb(err);
        return cb(null, rows) 
    })
}