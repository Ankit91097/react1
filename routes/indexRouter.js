const express=require('express')
const router=express.Router()
const userModel=require('../models/userModel')
const {home,register,readAll}=require('../controllers/indexControllers')
router.get('/',home)
router.post('/register',register)
router.get('/readAll',readAll)
module.exports=router