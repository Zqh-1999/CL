//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const contion = require('../controller/Register')
// 显示登录页面
router.get('/admin/login', contion.login);
//  操作登陆页面
router.post('/admin/login', contion.userLogin);

// 暴露
module.exports = router;