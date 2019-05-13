//引入模块包
const express = require('express')
//创建服务器
const app = express();

//服务器配置
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))

// 引入express-session
const session = require('express-session');

// 在服务器中创建一个session
//connect.sid = s%3Aj4XGRookqqL7yjAgtBxWaT_xVo2zM6Ls.P0waS9L6OdKgOt5gWlPcFmuqzr5txnHDZv3%2FH40tKkI
app.use(session({
  // 密钥:  把这里的 ‘keyboard cat’ 加密成你不认识的一大堆字符串
  secret: 'keyboard cat',
  // 是否强制保存到存储区
  resave: false,
  // 是否在没有登录的时候先给前端一个sessionId
  saveUninitialized: false,
  cookie: {
    // 60一分钟 60*5
    maxAge: 60000
  }
}))
//挂载路由
//登陆
const routerLogin = require('./router/routerRegister')
app.use(routerLogin)

//挂载路由
//仪表板
const routerDashBoaro = require('./router/routerDashBoaro')
app.use(routerDashBoaro)

//挂载路由
//地址簿
const routerAddressBook = require('./router/routerAddressBook')
app.use(routerAddressBook)

//设置静态资源目录
app.use(express.static('./public'));

app.set('view engine', 'ejs');
// 3.3 设置模板引擎的模板在哪个目录
app.set('views', __dirname + '/views');

//监听端口，并启动服务
app.listen(3309, () => {
  console.log('server is running at http://127.0.0.1:3309');
})
