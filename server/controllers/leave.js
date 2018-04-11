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
    if(!isEmpty(data) && !isEmpty(data)) {
        var insertQuery =
            "INSERT INTO leaveRequests ( username, name, class, dept, phone, reason, advisorName, parentMobile, fromDate, toDate ) values (?,?,?,?,?,?,?,?,?,?)";
        connection.query(
            insertQuery,[
                user.username,
                user.name, 
                user.class,
                user.dept,
                user.phone,
                data.reason,
                data.advisorName,   
                data.parentMobile,
                new Date(data.m1),
                new Date(data.m2)
            ],
            function (err, rows) {
                if (err) return cb(err);
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
export function getAllTweets(user,cb) {
    var query;
    if(user.userType == 'PRINCIPAL'){
        query = `SELECT * from leaveRequests ORDER BY createdAt DESC`;
    } else if (user.userType == 'HOD'){
        query = `SELECT * from leaveRequests WHERE dept = '${user.dept}' ORDER BY createdAt DESC`;
    } else if (user.userType == 'ADVISOR') {
        query = `SELECT * from leaveRequests WHERE class = '${user.class}' ORDER BY createdAt DESC`;
    } else if (user.userType == 'WARDEN') {
        query = `SELECT * from leaveRequests ORDER BY createdAt DESC`;
    }
    connection.query(query, (err, rows)=>{
        if (err) return cb(err);
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