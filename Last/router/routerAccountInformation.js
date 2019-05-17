//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlAccountInformation')

// 显示页面
router.get("/admin/AccountInformation", controller.AccountInformation);

router.post('/admin/userAdder', controller.userAdder);


router.get('/admin/showNamense', controller.showNamense)
// 暴露
module.exports = router;
