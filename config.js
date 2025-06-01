const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "G4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNixcbiAgICAgICAgMixcbiAgICAgICAgNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDk3LFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTIxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJmKzdmT1ZNSXJQelBRbHQ3a01ScWluR2hnR25mcDFtczFyaG56RWdsS2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndpNWxwOFpEU01lNExPckxpNkdoWkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDVkZTM0NWMtYTA2MS00MjJkLTg3ZTItYjZlZjVlMjgzYmQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDIyNSxcbiAgICAgIDgwLFxuICAgICAgMTgsXG4gICAgICA0NixcbiAgICAgIDc2LFxuICAgICAgNTUsXG4gICAgICAxNzAsXG4gICAgICAyMTMsXG4gICAgICAxMDMsXG4gICAgICAyNDcsXG4gICAgICAyNCxcbiAgICAgIDI0OSxcbiAgICAgIDEzNSxcbiAgICAgIDY2LFxuICAgICAgMzIsXG4gICAgICA2OCxcbiAgICAgIDAsXG4gICAgICAyMDAsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDEzMixcbiAgICAgIDIzOSxcbiAgICAgIDE0MyxcbiAgICAgIDE3MCxcbiAgICAgIDYsXG4gICAgICAyMDQsXG4gICAgICAxNCxcbiAgICAgIDI0NCxcbiAgICAgIDIwMCxcbiAgICAgIDE4LFxuICAgICAgMTAyLFxuICAgICAgMTU2LFxuICAgICAgMjcsXG4gICAgICA0OCxcbiAgICAgIDE1LFxuICAgICAgNDIsXG4gICAgICAyMjYsXG4gICAgICA0MCxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ055b3hmWURFSXUyODhFR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRExlMGVTL0Zsc0NRRnRqbnBxc2l6TW9CQWRmQzlqMDZ2RDQrUEdWMjFEaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXb000MGhtY2MrNFJUYW11MTM0WFA5eE9keDNRZTYxTzNqQjZhZHFtYnhYQ3JYanFITldSQlJzb3A4UnljbkhsSmlPVUhpVld1TFJmRlF4UHhDNWhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZWWo0NXdJTjlFeEZONXZDUlNDaklmRm1wS0t1TmtGS1R6VzZMdDREK0hmaXp4b3doRDhKWW9jYzBiMG5UL2Y4cklRUER2S2R3dER0bU1yNFRZUHVnZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODc2Mjc5Mzc6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJqb3NoIGdyYXBoaWNzIGRlc2lnblwiLFxuICAgIFwibGlkXCI6IFwiMTc5ODczMjMwMzc3MTc5OjU0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4NzYyNzkzNzo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDg4MTg3MDNcbn0iCn0=
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
