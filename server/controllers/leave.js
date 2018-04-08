// Server / Repositories / Tweet

import isEmpty from 'lodash/isEmpty';

import sharedConfig from '../../shared/configs/shared';

var mysql = require("mysql");
var dbconfig = require("../configs/database");
var connection = mysql.createConnection(dbconfig.connection);
connection.query("USE " + dbconfig.database);

/*
 * Create a new user record in 'tweet' table
 * Accepts: String username, String password
 * Returns: Promise
 */
export function createTweet(user, data, cb) {
    console.log(data)
    if(!isEmpty(data) && !isEmpty(data)) {
        var insertQuery =
            "INSERT INTO leaveRequests ( username, name, dept, phone, createdAt, reason, parentMobile, fromDate, toDate ) values (?,?,?,?,?,?,?)";
        connection.query(
            insertQuery,[
                user.username,
                user.name,
                user.dept,
                user.phone,
                new Date(Date.now()),
                data.reason,
                data.parentMobile,
                data.fromDate,
                data.toDate
            ],
            function (err, rows) {
                if (err) return cb(err);
                console.log(rows);
                return cb(null, rows);
            }    
        )
    }
    return false;
}

/*
 * Get list of all tweets
 * Returns: Promise
 */
export function getAllTweets(cb) {
    connection.query(`SELECT * from leaveRequests ORDER BY createdAt DESC`, (err, rows)=>{
        if (err) return cb(err);
        console.log(rows);
        return cb(null, rows);
    })
}

/*
 * Get list of all tweets
 * Returns: Promise
 */
// export function getTweetCount() {
//     return Tweet.count();
// }