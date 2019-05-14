//引入mysql
const conn = require('../data')

// 显示页面
module.exports.CreateNewCustomer = (req, res) => {
    res.render('CreateNewCustomer');
  }

  module.exports.BEUserAdd = (req, res) => {
    console.log(req.body);
    let sqlData = [null, req.body.prefix, req.body.firstname,req.body.lastname,req.body.prefox,req.body.email, req.body.password];
    console.log(sqlData);
    let sql = 'insert into users values (?,?,?,?,?,?,?);'
    console.log(req.body);
    conn.query(sql, sqlData, (error, results) => {
      if (error) {
        return console.log(error);
      }
  
      console.log(results);
      if (results.affectedRows) {
        res.json({
          code: '1001',
          message: '用户添加成功'
        })
      }
    })
  }