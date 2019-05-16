//引入mysql
const conn = require('../data')

// 显示页面
module.exports.AccountInformation = (req, res) => {
    res.render('AccountInformation');
}
