// 引入模块
const express=require('express');
// 创建路由
const router=express.Router();
//引入 controller
const controller=require('../controller/body');
//显示页面
router.get('/body', controller.showbody);
//显示模版
router.get('/bodyshow',controller.bodyshow);
// 暴露
module.exports=router;