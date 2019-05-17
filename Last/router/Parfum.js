const express=require('express');
const router=express.Router();
const controller=require('../controller/Parfum');
router.get('/Parfumshow',controller.Parfumshow)
module.exports=router;