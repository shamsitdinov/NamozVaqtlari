// import TelegramBot from "node-telegram-bot-api";
// import "dotenv/config";
// import { namozOption, regionOptions } from "../options.js";
// import { regionTime } from "../regions/region.js";




// export const startBot = (bot) => {
//   bot.setMyCommands([
//     { command: "/start", description: "Boshlash" },
//   ]);
//   bot.on("message", async (msg) => {
//     const text = msg.text;
//     const chatId = msg.chat.id;
    

//     const opts = {
//       reply_to_message_id: msg.message_id,
//       reply_markup: {
//         resize_keyboard: true,
//         one_time_keyboard: true,
//         keyboard: [['Namoz vaqtlari']]
//       }
//     };
//     if (text === "/start") {
//       await bot.sendMessage(chatId, "Botimizga hush kelibsiz!", opts)
//     }
//     if (text === 'Namoz vaqtlari') {
//       await bot.sendMessage(chatId, "Hududni tanlang", regionOptions)
//     }
//     else{
//       await bot.sendMessage(chatId, "Tugmadan foydalaning")
//     }
//   });
//   bot.on('callback_query', async msg => {
//     const data = msg.data
//     const chatId = msg.message.chat.id
//     await regionTime(data, chatId, bot)
//   })


// };

  
import { namozOption, regionOptions } from "../options.js";
import { regionTime } from "../regions/region.js";

export const startBot = (bot) => {
  bot.setMyCommands([
    { command: "/start", description: "Boshlash" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    const opts = {
      reply_to_message_id: msg.message_id,
      reply_markup: {
        resize_keyboard: true,
        one_time_keyboard: true,
        keyboard: [['Namoz vaqtlari']]
      }
    };

    if (text === "/start") {
      await bot.sendMessage(chatId, "Botimizga hush kelibsiz!", opts);
    } else if (text === 'Namoz vaqtlari') {
      await bot.sendMessage(chatId, "Hududni tanlang", regionOptions);
    } else {
      await bot.sendMessage(chatId, "Tugmadan foydalaning");
    }
  });

  bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    await regionTime(data, chatId, bot);
  });
};
