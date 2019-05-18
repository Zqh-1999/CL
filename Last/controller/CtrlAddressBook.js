//引入mysql
const conn = require('../data')

// 显示页面
module.exports.AddressBook = (req, res) => {
    // if (!req.session.isLogin) {
    //     req.redirect('/admin/login')
    //     return
    // } else {
    res.render('AddressBook');
}

// }
// 主页
module.exports.BEAddressBooks = (req, res) => {
    // console.log(req.body);
    let sqlData = [null, req.body.prefvx, req.body.firstname, req.body.lastname, req.body.company, req.body.telephone, req.body.contact_telephone, req.body.street1, req.body.street2, req.body.city, req.body.postcode, req.body.prefox, req.body.prefex];
    // console.log(sqlData);
    let sql = 'insert into address values (?,?,?,?,?,?,?,?,?,?,?,?,?);'
    conn.query(sql, sqlData, (error, results) => {
        if (error) {
            return console.log(error);
        }
        if (results.affectedRows) {
            res.json({
                code: '1003',
                message: '地址添加成功'
            })
        }
    })
}
//模板控制器
module.exports.showName = (req, res) => {
    conn.query('select * from users where id=?', [req.session.user.id], (err, data) => {
        if (err) {
            return console.log(err)
        }
        res.json(data)

    })
}