//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlMyNewsletter')

// 显示页面
router.get("/admin/MyNewsletter", controller.MyNewsletter);

router.get('/admin/showNamence', controller.showNamence)

// 暴露
module.exports = router;