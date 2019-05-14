const express = require('express');

// 创建服务器
const app = express();

// 服务器配置
// 0.配置post请求的body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// 1.设置静态资源目录
app.use(express.static('./public'));

//#region 2.配置路由
const CreateNewCustomer = require('./router/routerCreateNewCustomer')
app.use(CreateNewCustomer)

//#endregion


//#region 3.配置ejs模板引擎
// 3.1 下载ejs包
// 3.2 设置模板引擎的后缀是什么
app.set('view engine', 'ejs');
// 3.3 设置模板引擎的模板在哪个目录
app.set('views', __dirname + '/views');
//#endregion

// 监听端口 并启动服务
app.listen(3018,  () => {
  console.log('server is running at http://localhost:3018');
})
