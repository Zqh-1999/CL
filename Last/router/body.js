const express=require('express');
const router=express.Router();
const controller=require('../controller/body');
router.get('/body', controller.showbody)
router.get('/bodyshow',controller.bodyshow)
module.exports=router;