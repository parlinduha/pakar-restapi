var mysql = require('mysql');

// koneksi ke database
const conn = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'stres-kerja-fwChaining'
});

conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql connection success')
});

module.exports = conn;