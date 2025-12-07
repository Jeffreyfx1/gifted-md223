const fs = require('fs-extra');
if (fs.existsSync('.env'))
  require('dotenv').config({ path: __dirname + '/.env' });
const path = require("path");

module.exports = { 
    SESSION_ID: process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"UKkHy5DJNqp3Vdt8dH3O1mY8RSYLRzLPTUnUxIh5/HQ="},"public":{"type":"Buffer","data":"ekMljZ6XITNLUahtyuqixw7S9/1YKD5jeg+jZ5oreQ4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"UEGlHpfN5ka9iW/qZNsRZKDZwpIihuFajvAhxsK19kk="},"public":{"type":"Buffer","data":"UaP5G+FRzO2JzNlpmi5LL/5u+J9fMem4nmLochcDEzY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"OLyIeGlvq2gGLm7H2KIa9+y+6Ctx0dBaP+n0oyursEI="},"public":{"type":"Buffer","data":"OXhwkSt0CQeuBRsV8tLCkZONW62BApiSH9vyOtmlESs="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SGv6eH/9YAwwYdGvo6eQg44BBJ/Jb0+jhpb58h30+kw="},"public":{"type":"Buffer","data":"DW2KiMN461OCzFI26WlKfAJw7kPDvPBLhFG8G8FbrxY="}},"signature":{"type":"Buffer","data":"BgWEuv5KcodKhxnha2aMcnBq56xE6dJOxzYq3oGus4n4dfLOOLZg9na7AvsUnwt26CZ1ttwxEYhXvFAADU8NhQ=="},"keyId":1},"registrationId":176,"advSecretKey":"t+QEow5ve3moZnm2TeyWv5AOQfBJvoCDkIwbO4aiMwQ=","processedHistoryMessages":[],"nextPreKeyId":60,"firstUnuploadedPreKeyId":60,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":false,"account":{"details":"CL6azcAEEMKd0skGGAEgACgA","accountSignatureKey":"cLOSVCPp9QNcW1EvddfUqWLJ94wHVjkK0OcuAJ/qbAo=","accountSignature":"2RIpoCmSdzsOoUAhpgyutfuIMuqEtcNyTkmcr+sQs73l58MQqMNc3pFTUCr7NDVKtXJMsQOKT2/ODOQGpqVzCQ==","deviceSignature":"oyURKubJ0e9xV8/OlWZmeQspz+N+rAIwVosSHlFk3Zypr2+zo1WA47oW4k/pPSuXzxlFQSXdZWfhGoARp1A7jA=="},"me":{"id":"2349123750583:6@s.whatsapp.net","lid":"23163245207750:6@lid","name":"JEPHTER TECH"},"signalIdentities":[{"identifier":{"name":"2349123750583:6@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BXCzklQj6fUDXFtRL3XX1KliyfeMB1Y5CtDnLgCf6mwK"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAkIDQgD"},"lastAccountSyncTimestamp":1765052119,"lastPropHash":"2P1Yhf"}',
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "",  // put only one number
    SUDO_NUMBERS : process.env.SUDO_NUMBERS || "", // can be multiple numbers separated by commas
    BOT_NAME : process.env.BOT_NAME || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃',
    FOOTER : process.env.FOOTER || 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ',
    CAPTION : process.env.CAPTION || '©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓',
    VERSION: process.env.VERSION || '5.0.0',
    BOT_PIC : process.env.BOT_PIC || 'https://gitcdn.giftedtech.co.ke/image/AZO_image.jpg',            
    MODE: process.env.MODE || "public",
    PM_PERMIT: process.env.PM_PERMIT || 'false',
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi",
    DM_PRESENCE : process.env.DM_PRESENCE || 'online', // recording/typing/online/offline
    GC_PRESENCE : process.env.GC_PRESENCE || 'online', // recording/typing/online/offline
    CHATBOT : process.env.CHATBOT || 'false', // can be true/audio/false   
    CHATBOT_MODE : process.env.CHATBOT_MODE || 'inbox', // can be inbox/groups/allchats
    STARTING_MESSAGE : process.env.STARTING_MESSAGE || "true",
    ANTIDELETE : process.env.ANTIDELETE || 'indm', // inchat/indm/false
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'false',
    ANTICALL : process.env.ANTICALL || 'false', // (decline/true)/block/false
    ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'false',
    ANTILINK : process.env.ANTILINK || 'false', // or delete or kick or true
    AUTO_LIKE_STATUS : process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || 'true',
    STATUS_LIKE_EMOJIS : process.env.STATUS_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",   
    STATUS_REPLY_TEXT: process.env.STATUS_REPLY_TEXT || "*ʏᴏᴜʀ sᴛᴀᴛᴜs ᴠɪᴇᴡᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*",             
    AUTO_REACT : process.env.AUTO_REACT || 'false',
    AUTO_REPLY : process.env.AUTO_REPLY || 'false',
    AUTO_READ_MESSAGES : process.env.AUTO_READ_MESSAGES || 'false', // true/commands/false
    AUTO_BIO : process.env.AUTO_BIO || 'false',
    AUTO_BLOCK: process.env.AUTO_BLOCK || '212,233',
    YT: process.env.YT || 'youtube.com/@giftedtechnexus',
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363408839929349@newsletter',
    NEWSLETTER_URL: process.env.NEWSLETTER_URL || 'https://whatsapp.com/channel/0029Vb3hlgX5kg7G0nFggl0Y',
    BOT_REPO: process.env.BOT_REPO || 'mauricegift/gifted-md',
    PACK_NAME: process.env.PACK_NAME || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃',
    PACK_AUTHOR: process.env.PACK_AUTHOR || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇'
};

let fileName = require.resolve(__filename);
fs.watchFile(fileName, () => {
    fs.unwatchFile(fileName);
    console.log(`Writing File: ${__filename}`);
    delete require.cache[fileName];
    require(fileName);
});
