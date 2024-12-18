const mysql2 = require('mysql2');

const config = {
    host: 'localhost',
    user: 'root',
    database: 'rsa',
    password: ''
}

const options = {
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
}

const createDBPoolOptions = ()  => ({
    ...config,
    ...options
})

const createDBPool = () => {
    try {
        console.log("Sukses Connect");
        return mysql2.createPool(createDBPoolOptions());
    } catch (error) {
        console.log("Error connect DB", error);
        process.exit();
        
    }
}

module.exports = {
    createDBPool
}