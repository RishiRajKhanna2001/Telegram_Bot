// pub-sub design pattern

const {Telegraf}=require('telegraf');
const axios=require('axios');
const bot = new Telegraf('5950610116:AAFGChXs_2JlPOVTRuaVuPnU4j7-PZFAkUg'); // immediately got ended bcz. making no netwrok calls

bot.start((ctx)=>ctx.reply("welcome to bot made by rishi"));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker',(ctx)=>ctx.reply('sticker found'));
bot.command('data',async function (ctx) {
    const response=await axios.get('https://raw.githubusercontent.com/RishiRajKhanna2001/Cpp-Code/master/1.cpp');
    return ctx.reply(response.data);
})

bot.launch();