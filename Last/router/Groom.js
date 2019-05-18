//引入 express
const express=require('express');
//创建路由
const router=express.Router();
//引入 controller
const controller=require('../controller/Groom');
//显示页面
router.get('/Groom', controller.showGroom);
//显示模板
router.get('/Groomshow',controller.Groomshow);
// 暴露路由
module.exports=router;