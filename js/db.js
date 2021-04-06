//数据库的名是"pomodoro.db"
var sqlite3 = require("sqlite3");
var fs = require('fs');
const path = require('path')

// var dataBaseInit = function () {
//     //创建数据库
//     var database = new sqlite3.Database(path.join(__dirname, "../pomodoro.db"), function (err) {
//         if (err) {
//             console.log("new database error,", err.message);
//         } else {
//             // console.log("new database success");

//             //创建表
//             database.run("create table if not exists pomodoro_list(id text, startTime TEXT, endTime TEXT, planTime TEXT,useTime text,isFinished text)", function (err) {
//                 if (err) {
//                     console.log("create table error,", err.message);
//                 } else {
//                     // console.log("create table success：" + new Date().getTime());
//                 }
//             });
//         }
//     });
// }

var insertData = function (id, startTime, endTime, planTime, useTime, isFinished) {
    var database = new sqlite3.Database("pomodoro.db", function (err) {
        database.run("BEGIN TRANSACTION;");
        //插入数据
        database.run("insert into pomodoro_list(id, startTime, endTime, planTime,planTimeSeconds,useTime, isFinished) VALUES(?,?,?,?,?,?)", [id, startTime, endTime, planTime, isFinished], function (err) {
            if (err) {
                console.log("insert data error,", err.message);
            } else {
                // console.log("insert data success");
            }
        });
        database.run("COMMIT TRANSACTION;");
    });
}


//查询
function selectNum() {
    var database = new sqlite3.Database("pomodoro.db", function (err) {
        //插入数据
        let selectSql = "select count(*) num from pomodoro_list where isFinished='true'";
        // get功能：运行指定参数的SQL语句，完成过后调用回调函数。如果执行成功，则回调函数中的第一个参数为null,第二个参数为结果集中的第一行数据，反之则回调函数中只有一个参数，只参数为一个错误的对象。
        database.get(selectSql, function (err, rows) {
            if (err) {
                console.log("select from pomodoro_list error,", err.message);
            } else {
                // console.log(rows.num);
                var number = rows.num;
                return number;
            }
        });
    });
};

module.exports.dataBaseInit = dataBaseInit;
module.exports.insertData = insertData;

