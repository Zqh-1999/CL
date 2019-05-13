//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlMyReturns')

// 显示页面
router.get("/admin/MyReturns", controller.MyReturns);

// 暴露
module.exports = router;