/*.----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| |   ______     | || |      __      | || |   _____      | || |     ____     | || |     ______   | || |  ____  ____  | || |              | || | ____    ____ | || |  ________    | |
| |  |_   _ \    | || |     /  \     | || |  |_   _|     | || |   .'    `.   | || |   .' ___  |  | || | |_   ||   _| | || |              | || ||_   \  /   _|| || | |_   ___ `.  | |
| |    | |_) |   | || |    / /\ \    | || |    | |       | || |  /  .--.  \  | || |  / .'   \_|  | || |   | |__| |   | || |    ______    | || |  |   \/   |  | || |   | |   `. \ | |
| |    |  __'.   | || |   / ____ \   | || |    | |   _   | || |  | |    | |  | || |  | |         | || |   |  __  |   | || |   |______|   | || |  | |\  /| |  | || |   | |    | | | |
| |   _| |__) |  | || | _/ /    \ \_ | || |   _| |__/ |  | || |  \  `--'  /  | || |  \ `.___.'\  | || |  _| |  | |_  | || |              | || | _| |_\/_| |_ | || |  _| |___.' / | |
| |  |_______/   | || ||____|  |____|| || |  |________|  | || |   `.____.'   | || |   `._____.'  | || | |____||____| | || |              | || ||_____||_____|| || | |________.'  | |
| |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------' 
*/



const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    alias: ["rebot","reboot"], 
    react: "🐬",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return;
const {exec} = require("child_process")
reply("restarting...")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({

    pattern: "settings",

    react: "☣️",

    alias: ["allvars","getvar"],

    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`
*[ •  BALOCH-MD - ALL VARS • ]*
*╭┈───────────────•*
*┊* *🛠 AUTO_READ_STATUS:* ➠ ${config.AUTO_READ_STATUS}
*┊* *🛠 MODE:* ➠ ${config.MODE} 
*┊* *🛠 AUTO_VOICE:* ➠ ${config.AUTO_VOICE} 
*┊* *🛠 AUTO_STICKER:* ➠ ${config.AUTO_STICKER} 
*┊* *🛠 AUTO_REPLY:* ➠ ${config.AUTO_REPLY} 
*┊* *🛠 ALIVE_IMG:* ➠ ${config.ALIVE_IMG} 
*┊* *🛠 ALIVE_MSG:* ➠ ${config.ALIVE_MSG} 
*┊* *🛠 ANTI_LINK:* ➠ ${config.ANTI_LINK} 
*┊* *🛠 ANTI_BAD:* ➠ ${config.ANTI_BAD} 
*┊* *🛠 PREFIX:* ➠ [${config.PREFIX}]
*┊* *🛠 FAKE_RECORDING:* ➠ ${config.FAKE_RECORDING} 
*┊* *🛠 AUTO_REACT:* ➠ ${config.AUTO_REACT} 
*┊* *🛠 HEART_REACT:* ➠ ${config.HEART_REACT} 
*┊* *🛠 OWNER_REACT:* ➠ ${config.OWNER_REACT} 
*┊* *🛠 BOT_NAME:* ➠ ${config.BOT_NAME}
*┊* *🛠 READ_MESSAGE:* ➠ ${config.READ_MESSAGE}
*╰┈───────────────•*
*•────────────•⟢*
> © POWERED BY BANDAHEALI
*•────────────•⟢*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━•⟢
*WANT TO CHANGE SOMETHING USE .setvar EXAMPLE== .setvar MODE public or .setvar MODE private
┗━━━━━━━━━━━━━━━━━━━━━━━━━━•⟢


`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

const fs = require("fs");
const path = require("path");

cmd(
    {
        pattern: "setvar",
        react: "⚙️",
        alias: ["setvariable", "updatevar"],
        desc: "Set or update bot's configuration variables and restart the bot.",
        category: "main",
        use: ".setvar <KEY> <VALUE>",
        filename: __filename,
    },
    async (conn, mek, m, { from, args, reply }) => {
        try {
            if (args.length < 2) {
                return reply(
                    "Usage: .setvar <KEY> <VALUE>\nExample: .setvar AUTO_REPLY false",
                );
            }

            const [key, ...rest] = args; // Extract the key and value
            const value = rest.join(" ").trim(); // Handle multi-word values
            const configPath = path.resolve(__dirname, "../config.js"); // Path to config.js

            // Read the current config.js content
            let configContent = fs.readFileSync(configPath, "utf8");

            // Prepare the value for replacement (handle boolean and string types)
            const formattedValue =
                isNaN(value) &&
                (value.toLowerCase() === "true" ||
                    value.toLowerCase() === "false")
                    ? value.toLowerCase()
                    : `"${value}"`;

            const keyRegex = new RegExp(`${key}:\\s*.*`, "m");

            // Update or add the key-value pair in the config.js
            if (keyRegex.test(configContent)) {
                configContent = configContent.replace(
                    keyRegex,
                    `${key}: ${formattedValue},`,
                );
            } else {
                return reply(`❌ Key "${key}" does not exist in config.js.`);
            }

            // Write updated config.js back to the file
            fs.writeFileSync(configPath, configContent);

            // Send success message and then restart
            await reply(
                `✅ Successfully updated variable:\n*${key}* ➠ *${value}*\n\n♻️ Restarting bot...`,
            );

            // Restart the bot
            setTimeout(() => process.exit(1), 5000); // Delay to ensure message is sent
        } catch (e) {
            console.error(e);
            reply(`❌ Error updating variable: ${e.message}`);
        }
    },
);



cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
*[ •  BALOCH-MD - UPTIME ‎ • ]*
*╭┈───────────────•*
*│  ◦* *_UPTIME:➠_*
*│  ◦* ${runtime(process.uptime())}
*│  ◦*
*│  ◦* *_RAM USAGE:➠_*
*│  ◦* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*│  ◦*
*│  ◦* *_HOSTNAME:➠_*
*│  ◦* ${os.hostname()}
*│  ◦*
*│  ◦* *_PLATFORM:➠_*
*│  ◦* ${process.env.DYNO ? "Heroku" : "Localhost"}
*│  ◦*
*╰┈───────────────•*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘽𝙖𝙣𝙙𝙖𝙝𝙚𝙖𝙡𝙞
*•────────────•⟢*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*[ •  B O T - O W N E R ‎ • ]*
*╭┈───────────────•*
*│  ◦* *BANDAHEALI*
*╰┈───────────────•*

*[ •  BALOCH-MD - REPO ‎ • ]*
*╭┈───────────────•*
*│  ◦* *https://github.com/Sarkar-Bandaheali/BALOCH-MD*
*╰┈───────────────•*

*[ •  Sarkar-MD - REPO • ]*
*╭┈───────────────•*
*│  ◦* *https://github.com/Sarkar-Bandaheali/Sarkar-MD*
*╰┈───────────────•*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘽𝙖𝙣𝙙𝙖𝙝𝙚𝙖𝙡𝙞
*•────────────•⟢*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "BALOCH-MD",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'BALOCH-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Sarkar-Bandaheali/BALOCH-MD" ,
thumbnailUrl: "" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
