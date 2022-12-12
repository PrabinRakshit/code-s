// db connection
const mysql = require("mysql");
const assert = require("assert");
// connection string info
const con = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6584162",
    password: "TMuhLc6Dfj",
    database: "sql6584162",

});

const connectDB = () => {
    return con.connect(function (err) {

        if (err) assert.deepStrictEqual(err, null);
        console.log("mysql DB connected");
    });

}
module.exports = connectDB;