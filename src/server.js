require('dotenv').config();

const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const app = express();
const webrouter = require('./routes/web');
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const mysql = require('mysql2');

//config template
configViewEngine(app);

//khai bao route
app.use('/test', webrouter)

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit'
});
// simple query
connection.query(
    'SELECT * from Users u ',
    function (err, results, fields) {
        console.log("result = ", results);
        console.log("fields = ", fields);
    }
)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})