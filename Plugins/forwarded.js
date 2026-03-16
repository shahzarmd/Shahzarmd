/*****************************************************************************
 *                                                                           *
 *                     Developed By SHAHZAR KHAN OFFICIAL                              *
 *                                                                           *
 *  🌐  GitHub   : https://github.com/shahzarmd                         *
 *  ▶️  YouTube  : https://youtube.com/@sktechsolutions0                       *
 *  💬  WhatsApp : https://whatsapp.com/channel/0029VbAeu4REVccNAW2zQb0N     *
 *                                                                           *
 *    © 2026 ShahzarKhanOfficial. All rights reserved.                            *
 *                                                                           *
 *    Description: This file is part of the SHAHZAR-MD Project.                 *
 *                 Unauthorized copying or distribution is prohibited.       *
 *                                                                           *
 *****************************************************************************/


module.exports = {
  command: 'forwarded',
  aliases: ['viral', 'fakeforward'],
  category: 'tools',
  description: 'Send text with a fake "Frequently Forwarded" tag',
  usage: '.viral <text> OR reply to a message',

  async handler(sock, message, args, context = {}) {
    const chatId = context.chatId || message.key.remoteJid;
    
    try {
      let txt = "";
      const quoted = message.message?.extendedTextMessage?.contextInfo?.quotedMessage;
      
      if (quoted) {
        txt = quoted.conversation || 
              quoted.extendedTextMessage?.text || 
              quoted.imageMessage?.caption || 
              quoted.videoMessage?.caption || 
              "";
      } 
      
      if (!txt || txt.trim() === "") {
        txt = args?.join(' ') || "";
      }

      if (!txt || txt.trim() === "") {
        return await sock.sendMessage(chatId, { 
          text: 'Please provide text or reply to a message to forward.' 
        }, { quoted: message });
      }

      await sock.sendMessage(chatId, { 
        text: txt,
        contextInfo: { 
          isForwarded: true, 
          forwardingScore: 999 
        } 
      });

    } catch (err) {
      console.error('Forwarding Spoof Error:', err);
      await sock.sendMessage(chatId, { text: '❌ Failed to spoof forwarding.' });
    }
  }
};

/*****************************************************************************
 *                                                                           *
 *                     Developed By SHAHZAR KHAN OFFICIAL                              *
 *                                                                           *
 *  🌐  GitHub   : https://github.com/shahzarmd                         *
 *  ▶️  YouTube  : https://youtube.com/@sktechsolutions0                       *
 *  💬  WhatsApp : https://whatsapp.com/channel/0029VbAeu4REVccNAW2zQb0N     *
 *                                                                           *
 *    © 2026 ShahzarKhanOfficial. All rights reserved.                            *
 *                                                                           *
 *    Description: This file is part of the SHAHZAR-MD Project.                 *
 *                 Unauthorized copying or distribution is prohibited.       *
 *                                                                           *
 *****************************************************************************/