//引入mysql
const conn = require('../data')

// 显示页面
module.exports.AccountInformation = (req, res) => {
    res.render('AccountInformation');
}


module.exports.userAdder = (req, res) => {
    // console.log(req.body);
    let sqlData = [null, req.body.prefix, req.body.firstname,req.body.lastname,req.body.email, req.body.password];
    // console.log(sqlData);
    let sql = 'insert into contact values (?,?,?,?,?,?);'
    // console.log(req.body);
    conn.query(sql, sqlData, (error, results) => {
      if (error) {
        return console.log(error);
      }
  
      console.log(results);
      if (results.affectedRows) {
        res.json({
          code: '1005',
          message: '用户添加成功'
        })
      }
    })
  }

  module.exports.showNamense = (req, res) => {
    conn.query('select * from users where id=?', [req.session.user.id], (err, data) => {
      if (err) {
        return console.log(err)
      }
      res.json(data)
  
    })
  }
