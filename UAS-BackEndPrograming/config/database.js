// TODO 3: SETUP CONFIG DATABASE


const mysql = require("mysql");



require("dotenv").config();


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});


db.connect(function(err){
    if(err) {
        console.log(`Koneksi error: ${err}`);
        return;
    }
    else {
        console.log(`Koneksi berhasil`);
        return;
    }
});


module.exports = db;