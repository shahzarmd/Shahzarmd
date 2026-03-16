require('dotenv').config();

const settings = {
  // Array fallback: splits string by comma, or uses default array
  prefixes: process.env.PREFIXES ? process.env.PREFIXES.split(',') : ['.', '!', '/', '#'],
  
  packname: process.env.PACKNAME || 'SHAHZAR-MD',
  author: process.env.AUTHOR || 'shahzarkhanofficial',
  timeZone: process.env.TIMEZONE || 'Asia/Karachi',
  botName: process.env.BOT_NAME || "SHAHZAR-MD",
  botOwner: process.env.BOT_OWNER || 'SHAHZAR KHAN',
  ownerNumber: process.env.OWNER_NUMBER || '923176699066',
  giphyApiKey: process.env.GIPHY_API_KEY || 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: process.env.COMMAND_MODE || "public",
  
  maxStoreMessages: Number(process.env.MAX_STORE_MESSAGES) || 20,
  tempCleanupInterval: Number(process.env.CLEANUP_INTERVAL) || 1 * 60 * 60 * 1000,
  storeWriteInterval: Number(process.env.STORE_WRITE_INTERVAL) || 10000,
  
  description: process.env.DESCRIPTION || "This is a bot for managing group commands and automating tasks.",
  version: "5.2.0",
  updateZipUrl: process.env.UPDATE_URL || "https://github.com/shahzarmd/Shahzarmd/archive/refs/heads/main.zip",
  channelLink: process.env.CHANNEL_LINK || "https://whatsapp.com/channel/0029VbAeu4REVccNAW2zQb0N",
  ytch: process.env.YT_CHANNEL || "sktechsolutions0"
};

module.exports = settings;
