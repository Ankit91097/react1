const mongoose=require('mongoose')
const { type } = require('os')

const userModel=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        minLength:[6,"Name must be alteat 6 letter"],
        trim:true
    },
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[6,"Username must be alteat 6 letter"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        lowercase:true,
        trim:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    gender:{
        enum:["male","female","other"]
    },
    password:{
        type:String,
        select:false,
        required:[true,"Username is required"],
        minLength:[6,"Username must be alteat 6 letter"],
        trim:true,
    },
})
const User = mongoose.model('user',userModel)
module.exports= User