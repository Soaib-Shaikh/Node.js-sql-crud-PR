const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Soaib@1002', // apna password yaha likhna
  database: 'nodecrud'
});

db.connect((err) => {
  if (err) {
    console.log(' DB Connection Failed:', err);
  } else {
    console.log('Connected to MySQL DB');
  }
});

module.exports = db;
