const mysql = require('mysql');
require('dotenv').config();
const conn = mysql.createConnection({
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});

// conn.connect();

exports.InsertUser = (req, res) => {
    const sql = 'INSERT INTO users SET ?';
    const params = req;
    conn.query(sql, [params], function(error, results, fields){
        if (error) throw error;
        console.log(results.insertId);
        return results.insertId;
    })
}