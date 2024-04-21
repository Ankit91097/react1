const User=require("../models/userModel")
exports.home=function(req,res,next){
    res.status(201).json({success:true,message:"this is test message"})
}
exports.register=async function(req,res,next){
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json({success:true,user})
    } catch (error) {
        res.status(500).json({success:false,error:error.message})
    }
}
exports.readAll=async function(req,res,next){
    try {
        const users = User.find()
        res.status(201).json({success:true,users})
    } catch (error) {
        res.status(500).json({success:false,error:error.message})
    }
}