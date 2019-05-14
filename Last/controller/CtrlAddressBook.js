//引入mysql
const conn = require('../data')

// 显示页面
module.exports.AddressBook = (req, res) => {
    res.render('AddressBook');
}
