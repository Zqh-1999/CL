const express=require('express');
const router=express.Router();
const controller=require('../controller/Nails');
router.get('/Nailsshow',controller.Nailsshow)
module.exports=router;