const express= require('express')
const bodyParser=require('body-parser')
require('dotenv').config()

const {PORT}=require('./config/serverconfig')
const setupAndStartServer=async()=>{
    const app=express();
    app.use(bodyParser.json)
    app.use(bodyParser.urlencoded({extended:true}));
const PORT=3000
    app.listen(PORT, ()=>{
        console.log(`Server started at ${PORT}`)
        console.log(process.env.PORT)
    
    })
}

setupAndStartServer();