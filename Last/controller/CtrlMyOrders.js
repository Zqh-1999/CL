//引入mysql
const conn = require('../data')

// 显示页面
module.exports.MyOrders = (req, res) => {
    res.render('MyOrders');
}
