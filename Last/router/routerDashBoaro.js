//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlDashBoaro')


// 显示首页
router.get("/", controller.index);

// 显示页面
router.get("/admin/DashBoaro", controller.DashBoaro);

// 显示h1
router.get('/admin/showNameS', controller.showNameS)

// 显示h2
router.get('/admin/showNameA', controller.showNameA)


// 暴露
module.exports = router;