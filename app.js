//setting dotenv file
require('dotenv').config({path:'./.env'})
const express=require('express')
const app=express()

//dbsetup
require('./models/connect.js').mongoconnection();

const indexRouter = require('./routes/indexRouter');

//setting logger
app.use(require('morgan')("tiny"))

//bodyParaser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//router setup -> must be second last in the file
app.use('/api/user', indexRouter);


app.all("*",function(res,req){
    res.status(404).json({url:req.url,message:"page not found"})
})

//creating server --must be at the last
app.listen(process.env.PORT,function(){
    console.log(`Server Started on port ${process.env.PORT}`)
})




// mongodb+srv://nitesh:<password>@cluster0.mjfjhfc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0