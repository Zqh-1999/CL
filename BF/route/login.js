// 1.引入express包
const express = require('express');
// 2.使用Router来创建路由
const router = express.Router();
// 3.引入控制器模块
const controller = require('../controller/login');
// 4.创建路由规则

// 4.1 后台的登录页面
router.get('/admin/login', controller.BELogin);

// 4.1.1 管理员登录
router.post('/admin/login', controller.adminLogin);





// 5.暴露路由
module.exports = router;