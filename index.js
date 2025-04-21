import express from 'express'
import mongoose from 'mongoose';
import {startBot} from './bot/bot.js';
import 'dotenv/config'
const app = express() 
   
startBot()


app.listen(process.env.PORT,()=>console.log('Server is running'))
