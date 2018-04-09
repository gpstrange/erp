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
                console.log("DB done")
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
export function getAllTweets(user,cb) {
    console.log("get funstion..............................")
    console.log(user)
    connection.query(`SELECT * from leaveRequests WHERE class = "${user.class}" ORDER BY createdAt DESC`, (err, rows)=>{
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