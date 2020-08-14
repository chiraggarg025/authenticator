// Require express
const express = require('express');
const router=express.Router();
module.exports=router;
// get controller
const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);