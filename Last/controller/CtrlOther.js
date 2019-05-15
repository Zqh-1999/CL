//引入mysql
const conn = require('../data')

// shop页面
module.exports.shop = (req, res) => {
    res.render('shop');
}
