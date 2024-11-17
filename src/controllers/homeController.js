const connection = require('../config/database');

let user = [];
const getHomePage = (req, res) => {
    // connection.query(
    //     'SELECT * from Users u ',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log("result = ", results);
    //         res.send(JSON.stringify(users))
    //     }
    // )
    return res.render('homepage.ejs')
}
const getABC = (req, res) => {
    res.send('World!')
}
const getsample = (req, res) => {
    res.render('sample.ejs')
}
const postCreateUser = (req, res) => {
    let { email, name, city } = req.body;
    console.log("req.body =", email, "name = ", name, "city = ", city);
    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send(' Created Success ');
        }
    )
}

module.exports = {
    getHomePage, getABC, getsample, postCreateUser
}