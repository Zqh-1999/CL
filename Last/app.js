//引入模块包
const express = require('express')
//创建服务器
const app = express();

//服务器配置
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false }))

//挂载路由
//登陆
const routerLogin = require('./router/routerRegister')
app.use(routerLogin)

//设置静态资源目录
app.use(express.static('./public'));

app.set('view engine', 'ejs');
// 3.3 设置模板引擎的模板在哪个目录
app.set('views', __dirname + '/views');

//监听端口，并启动服务
app.listen(3309, () => {
  console.log('server is running at http://127.0.0.1:3309');
})
