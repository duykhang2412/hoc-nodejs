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
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    // console.log("req.body =", email, "name = ", name, "city = ", city);
    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send(' Created Success ');
    //     }
    // );
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city],
    );
    console.log(" check result: ", results);
    res.send('Create Success')
    // connection.query(
    //     'SELECT * from Users u ',
    //     function (err, results, fields) {
    //         console.log("result = ", results);
    //     }

    // const [results, fields] = await connection.query('SELECT * from Users u ');
    // console.log("Check result:", results);
}
const getcreatePage = (req, res) => {
    res.render('create.ejs');
}
module.exports = {
    getHomePage, getABC, getsample, postCreateUser, getcreatePage
}