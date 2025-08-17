// import express from 'express'
// import mongoose from 'mongoose';
// import {startBot} from './bot/bot.js';
// import 'dotenv/config'
// import bodyParser from "body-parser"
// import TelegramBot from 'node-telegram-bot-api';
// const app = express() 
// const URL = process.env.PORT_URL; // Render avtomatik beradi
   
// const TOKEN = process.env.TELEGRAM_TOKEN; // Render ENV ichiga qo'yasiz
// app.get("/ping",(req,res)=>{
//     res.send("Bot ishladi !")
// })

// startBot()

// const bot = new TelegramBot(TOKEN)

// // const bot = new TelegramBot(TOKEN);

// // Express server

// app.use(bodyParser.json());

// // Webhook endpoint
// app.post("/" + TOKEN, (req, res) => {
//   bot.processUpdate(req.body);
//   res.sendStatus(200);
// });

// // Misol: /start komandasi
// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(msg.chat.id, "Salom, Nodirbek! 🚀 Men ishlayapman!");
// });

// // Serverni ishga tushirish
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log("Server running on port", PORT);

//   // Webhook o'rnatish
//   bot.setWebHook(`${URL}/${TOKEN}`);
// });









// // app.listen(process.env.URL,()=>console.log('Server is running'))






import express from 'express';
import mongoose from 'mongoose';
import { startBot } from './bot/bot.js';
import 'dotenv/config';
import bodyParser from "body-parser";
import TelegramBot from 'node-telegram-bot-api';

const app = express();
const TOKEN = process.env.TELEGRAM_TOKEN;
const URL = 'https://namozvaqtlari.onrender.com'// Render dan kelgan URL
const PORT = process.env.PORT || 3000;

startBot();

const bot = new TelegramBot(TOKEN, { polling: false });

app.get("/ping", (req, res) => {
  res.send("Bot ishladi !");
});

app.use(bodyParser.json());

// Webhook endpoint
app.post("/" + TOKEN, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Misol: /start komandasi
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Salom, Nodirbek! 🚀 Men ishlayapman!");
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
  bot.setWebHook(`${URL}/${TOKEN}`);
});
 