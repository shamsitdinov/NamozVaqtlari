import express from 'express'
import mongoose from 'mongoose';
import {startBot} from './bot/bot.js';
import 'dotenv/config'
const app = express() 
   
app.get("/ping",(req,res)=>{
    res.send("Bot ishladi !")
})

startBot()


app.listen(process.env.PORT,()=>console.log('Server is running'))
