require('dotenv').config();

const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const app = express();
const webrouter = require('./routes/web');
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const connection = require('./config/database');
//config template
configViewEngine(app);

//khai bao route
app.use('/', webrouter)
// simple query
connection.query(
    'SELECT * from Users u ',
    function (err, results, fields) {
        console.log("result = ", results);
    }
)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})