//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlDashBoaro')

// 显示页面
router.get("/admin/DashBoaro", controller.DashBoaro);

// 暴露
module.exports = router;