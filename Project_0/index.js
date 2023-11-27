const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
const binarySearch = function search(arr, x) {
    let lo = 0,
      hi = arr.length - 1;
    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (arr[mid] == x) return mid;
      else if (arr[mid] < x) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return undefined;
  };
  `;

bot.start((ctx) => ctx.reply("Welcome")); // /start

bot.command("binarysearch", (ctx) => ctx.reply(binarySearchString)); // /binarysearch

bot.command("saravana", (ctx) =>
  ctx.reply("hi i am saravana this is me. bhargavi ")
);

bot.on("sticker", (ctx) => ctx.reply("❤️"));

bot.on("text", (ctx) => {
  console.log(ctx.update.message.text);

  if (ctx.update.message.text == "bhargavi") {
    ctx.reply("saravana's sister cccc");
  } else {
    ctx.reply("i don't  understand humans");
  }
});

bot.on("text", (ctx) => {
  console.log(ctx.update.message.text);

  if (ctx.update.message.text == "thangam") {
    ctx.reply("saravana's mother");
  } else {
    ctx.reply("i don't  understand humans");
  }
});
// bot.on("Emoji", (ctx) => ctx.reply("dont send emoji"));

bot.on("text", async (ctx) => {
  // Explicit usage
  await ctx.telegram.sendMessage(
    ctx.message.chat.id,
    `Hello ${ctx.state.role}`
  );

  // Using context shortcut
  //   await ctx.reply(`Hello ${ctx.state.role}`);
});

bot.command("quit", async (ctx) => {
  // Explicit usage
  await ctx.telegram.leaveChat(ctx.message.chat.id);

  // Using context shortcut
  await ctx.leaveChat();
});

bot.launch();
