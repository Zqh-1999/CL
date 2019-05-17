const express=require('express');
const router=express.Router();
const controller=require('../controller/AMonent');
router.get('/AMonentLikeThie', controller.showAMonent)
router.get('/AMonebtshow', controller.AMonentshow)
module.exports=router;