import express from 'express'
import mongoose from 'mongoose';
import {startBot} from './bot/bot.js';
import 'dotenv/config'
const app = express() 
   
startBot()
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected!'));


app.listen(process.env.PORT,()=>console.log('Server is running'))
