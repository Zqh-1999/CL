//引入模块包
const express = require('express')
//创建路由
const router = express.Router();

//引入controller
const controller = require('../controller/CtrlAddressBook')

// 显示页面
router.get("/admin/AddressBook", controller.AddressBook);

// 注册用户
router.post('/admin/BEAddressBooks',controller.BEAddressBooks)

router.get('/admin/showName', controller.showName)
// 暴露
module.exports = router;
