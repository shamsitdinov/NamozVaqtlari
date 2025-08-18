import express from 'express';
import { startBot } from './bot/bot.js';
import 'dotenv/config';
import bodyParser from "body-parser";
import TelegramBot from 'node-telegram-bot-api';

const app = express();
const TOKEN = process.env.TELEGRAM_TOKEN;
const URL = 'https://namozvaqtlari.onrender.com'
const PORT = process.env.PORT || 3000;

startBot(bot);

const bot = new TelegramBot(TOKEN, { polling: false });

app.get("/ping", (req, res) => {
  res.send("Bot ishladi !");
});

app.use(bodyParser.json());

app.post("/" + TOKEN, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Salom, Nodirbek! 🚀 Men ishlayapman!");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
  bot.setWebHook(`${URL}/${TOKEN}`);
});
 