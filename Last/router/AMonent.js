// 引入
const express=require('express');
//创建路由
const router=express.Router();
//引入 controller
const controller=require('../controller/AMonent');
//显示页面
router.get('/AMonentLikeThie', controller.showAMonent);
//显示模板
router.get('/AMonebtshow', controller.AMonentshow);
// 暴露
module.exports=router;