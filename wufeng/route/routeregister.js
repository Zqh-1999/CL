//引入模块包
const express = require('express')
//创建路由
const route = express.Router();

//引入controller
const contion = require('../controller/Ctrlregister')
// 显示登录页面
route.get('/admin/login', contion.login);
//  操作登陆页面
route.post('/admin/login', contion.userLogin);

// 暴露
module.exports = route