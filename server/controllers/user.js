// Server / Repositories / User

import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';
var mysql = require("mysql");
var dbconfig = require("../configs/database");
var connection = mysql.createConnection(dbconfig.connection);
connection.query("USE " + dbconfig.database);

import serverConfig from '../configs/server';

/*
 * Check if username already exists in 'users' table
 * Accepts: Object { username }
 * Returns: Promise
 */
export function checkUsernameAlreadyExists(data, cb) {
    let errors = {};
    connection.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
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

/*
 * Create a new user record in 'users' table
 * Accepts: String username, String password
 * Returns: Promise
 */
export function createUser(newUserMysql, cb) {
    // Encrypt password
    const passwordEncrypted = bcrypt.hashSync(newUserMysql.password, serverConfig.saltRounds);
    var insertQuery =
        "INSERT INTO users ( username, password, address, name, email, dept, dob, phone, community, bloodGroup, aadharNumber ) values (?,?,?,?,?,?,?,?,?,?,?,?)";
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
            newUserMysql.aadharNumber
        ],
        function (err, rows) {
            if (err) console.log(err);
            console.log(rows);
            newUserMysql.id = rows.insertId;

            return cb(null, rows);
        }
    );
}


/*
 * Get user's all tweets
 * Accepts: String username
 * Returns: Promise
 */
// export function getAllTweetsByUsername(username) {
//     return User.where({ username: username })
//         .fetchAll({
//             withRelated: ['tweets']
//         });
// }