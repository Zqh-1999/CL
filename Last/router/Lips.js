const express=require('express');
const router=express.Router();
const controller=require('../controller/Lips');
router.get('/LipsUsers',controller.LipsUsers)
module.exports=router;