const express = require('express');
const app = express();

// 设置post请求的编译
const bdPs = require('body-parser')
app.use(bdPs.urlencoded({ extended: false }))

// 网站图标
const favicon = require('serve-favicon')
app.use(favicon(__dirname + '/favicon.ico'))

// 设置登录成功的标识
const session = require('express-session')
app.use(session({
  // 密钥:  把这里的 ‘keyboard cat’ 加密成你不认识的一大堆字符串
  secret: 'keyboard cat',
  // 是否强制保存到存储区
  resave: false,
  // 是否在没有登录的时候先给前端一个sessionId
  saveUninitialized: false,
  cookie: {}
}))

// 1.设置静态资源目录
app.use(express.static('./public'));

// #region 2.配置路由
// 2.1 引入首页路由模块
const routeIndex = require('./route/index');
// 2.1.1 挂载路由模块到app上
app.use(routeIndex);

// 2.2 引入用户路由模块
const routeUsers = require('./route/users');
// 2.2.1 挂载路由模块到app上
app.use(routeUsers)

// 2.3 引入分类目录路由模块
const routeCategories = require('./route/categories');
// 2.3.1 挂载路由模块到app上
app.use(routeCategories)

// 2.4 引入管理员登陆模块
const routeLogin = require('./route/login.js')
// 2.4.1 挂载路由模块到app上
app.use(routeLogin)


// 2.11 引入文章发表路由模块
const routerPostAdd = require('./route/routePostAdd');
// 2.12 挂载文章发表路由模块到app上
app.use(routerPostAdd);

// #endregion

// #region 3.配置ejs模板引擎
// 3.1 下载ejs包
// 3.2 设置模板引擎的后缀是什么
app.set('view engine', 'ejs');
// 3.3 设置模板引擎的模板在哪个目录
app.set('views', __dirname + '/views');
// #endregion

// 监听端口 并启动服务
app.listen(80, () => {
  console.log('server is running at http://localhost/admin/login');
})
