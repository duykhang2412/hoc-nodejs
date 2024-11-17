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
module.exports = {
    getHomePage, getABC, getsample
}