const getHomePage = (req, res) => {
    res.send('Controll')
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