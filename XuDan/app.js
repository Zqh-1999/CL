//引入模块包
const express = require('express')
//创建服务器
const app = express();
//网站图标
// const favicon = require('serve-favicon');
// app.use(favicon(__dirname + '/favicon.ico'));


//服务器配置
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))

//挂载路由
//添加新用户
const AddNewAddress = require('./route/routeAddNewAddress')
app.use(AddNewAddress)

// 我的账户
const MyAccount = require('./route/routeMyAccount')
app.use(MyAccount)

// 我的订单
const MyOrders  = require('./route/routeMyOrders')
app.use(MyOrders)

// 我的收藏
const MyWishlist = require('./route/routeMyWishlist')
app.use(MyWishlist)

//  通讯订阅
const NewsletterSubscription = require('./route/routeNewsletterSubscription')
app.use(NewsletterSubscription)


//设置静态资源目录
app.use(express.static('./public'));

app.set('view engine', 'ejs');
// 3.3 设置模板引擎的模板在哪个目录
app.set('views', __dirname + '/views');

//监听端口，并启动服务
app.listen(1331,()=>{
    console.log('server is running at http://localhost:1331');
})
