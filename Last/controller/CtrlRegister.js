//引入mysql
const conn = require('../data')

// 显示登陆页面
module.exports.login = (req, res) => {
    res.render('register');
  }

// #region 显示用户登录页面
module.exports.userLogin = (req, res) => {
    console.log(req.body);
    let pramas = [req.body.email, req.body.password];
    console.log(req.body.email)
    conn.query('select * from users where email=? and password=?', pramas, (error, results) => {
      if (error) return console.log(error);
  
      console.log(results);
  
      if (results.length == 0) {
        res.json({
          code: '1201',
          message: '邮箱或密码填写错误'
        })
      } else {
        req.session.isLogin = true;
        req.session.user = results[0];
        res.json({
          code: '1202',
          message: '登录成功'
        })
      }
    })
  }
  // #endregion