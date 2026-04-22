const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'shinkansen.proxy.rlwy.net',
    user: 'root',
    password: 'hrcnGbOVsJfkccaMyCqNmqlIOQhWipgI',
    database: 'railway',
    port: 18280,
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool.promise();
