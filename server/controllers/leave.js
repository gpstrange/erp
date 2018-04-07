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
export function createTweet(userId, data, cb) {
    console.log(data)
    if(!isEmpty(data) && !isEmpty(data)) {
        var insertQuery =
            "INSERT INTO leaveReason ( username, name, dept, phone, createdAt, reason, parentMobile, fromDate, toDate, fromTime, toTime ) values (?,?,?,?,?,?,?,?,?)";
        connection.query(
            insertQuery,[
                data.username,
                data.name,
                data.dept,
                data.phone,
                new Date(Date.now()),
                data.reason,
                data.parentMobile,
                data.fromDate,
                data.toDate,
                data.fromTime,
                data.toTime
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
// export function getAllTweets() {
//     const pagingLimit = sharedConfig.pagination;

//     console.log(pagingLimit);

//     return Tweet.query((qb) => {
//         qb.orderBy('created_at','DESC');

//         qb.limit(pagingLimit);

//         qb.offset((page - 1) * pagingLimit);
//     })
//         .fetchAll({
//             withRelated: [
//                 {
//                     'user': function(qb) {
//                         qb.column('id', 'username');
//                     }
//                 }
//             ]
//         });
// }

/*
 * Get list of all tweets
 * Returns: Promise
 */
// export function getTweetCount() {
//     return Tweet.count();
// }