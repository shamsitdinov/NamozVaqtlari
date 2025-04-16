import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";
import { UserModel } from "../User.js";
import { regionOptions } from "../options.js";
import { regionTime } from "../regions/region.js";

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.setMyCommands([
  { command: "/start", description: "Boshlash" },
  { command: "/register", description: "Ro'yxatdan o'tish" },
  { command: "/namoz", description: "Namoz vaqtlari" },
]);

const registerUser = {
  reply_markup: {
    inline_keyboard: [
      [{ text: "Ro'yxatdan o'tish", callback_data: "/register" }]
    ]
  }
} 

export const startBot = () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const first_name = msg.chat.first_name;
    const username = msg.chat.username;
    if (text === "/start") {
      await bot.sendMessage(chatId, "Botni ishga tushirish uchun ro'yxatdan o'ting ", registerUser)
    }

    if (text || registerUser === "/register") {
      try {
        let existUser = await UserModel.findOne({ id: chatId }).lean();
        if (!existUser) {
          await UserModel.create({
            id: chatId,
            first_name,
            username,
            created_at: new Date(),
          });
          return await bot.sendMessage(chatId, existUser? "Siz royxatdan o'tdingiz":"");
        } else {
          return await bot.sendMessage(
            chatId,
            "Hisobingiz allaqachon ro'yxatdan o'tgan"
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (text === '/namoz') {
      await bot.sendMessage(chatId, "Hududni tanlang", regionOptions)
    }
  });
  bot.on('callback_query', async msg => {
    const data = msg.data
    const chatId = msg.message.chat.id 
    let existUser = await UserModel.findOne({ id: chatId }).lean();

    if (existUser) {
      await regionTime(data, chatId, bot)
    } else {
      await bot.sendMessage(chatId, "Iltimos royxatdan o'ting!")
    }
    console.log(existUser)
  })


};

