/* .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------. 
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
const prefix = config.PREFIX
cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `
*╭┈───────────────────────────────────────────•*
*│  ◦* ~MR~ *${pushname}* *_ASLAMUALAIKUM_*
*╰┈───────────────────────────────────────────•*
*◆─〈 ${config.BOT_NAME} 〉─◆*
*╭┈───────────────────────────────────────────•* 
*│  ◦*  *RUNTIME* : ${runtime(process.uptime())}
 ╰┈──────────────────────────────────────────•*
 ╭┈──────────────────────────────────────•*
*│  ◦*  *MoDe* : *[${config.MODE}]*
*│  ◦*  *PreFiX* : *[${config.PREFIX}]*
*│  ◦*  *Bot Name* : *[${config.BOT_NAME}]*
*│  ◦*  *CREATOR* : *➺𝘽𝙖𝙣𝙙𝙖𝙝𝙚𝙖𝙡𝙞࿐*
*│  ◦*  *VERSION* : *ᴠ.1.0.0*
*│  ◦*  *OWNER NAME* : *[${config.OWNER_NAME}] 
╰┈───────────────────────────────────────•*
*[ • 🤴 OWNER-CMD 🤴 ‎• ]*
*╭┈───────────────•*
*┋*👑 *${prefix}UPDATECMD*
*┋*👑 *${prefix}SETTINGS <all settings>*
*┋*👑 *${prefix}OWNER*
*┋*👑 *${prefix}REPO*
*┋*👑 *${prefix}SYSTEM*
*┋*👑 *${prefix}UPTIME*
*┋*👑 *${prefix}BLOCK*
*┋*👑 *${prefix}UNBLOCK*
*┋*👑 *${prefix}SHUTDOWN*
*┋*👑 *${prefix}CLEAR*
*┋*👑 *${prefix}SETPP*
*┋*👑 *${prefix}BROADCAST*
*┋*👑 *${prefix}JID*
*┋*👑 *${prefix}GJID*
*┋*👑 *${prefix}RESTART*
*┋*👑 *${prefix}GETVAR* <allvars>
*┋*👑 *${prefix}SETVAR <true/false>*
*╰┈───────────────•*
*[ • 🔎 SEARCH-CMD 🔍 ‎• ]*
*╭┈───────────────•*
*┋*🔍 *${prefix}YTS  <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}YTA <ᴜʀʟ>*
*┋*🔍 *${prefix}LOLI <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}MOVIEINFO <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}IMG <ᴛᴇxᴛ>*
*┋*🔍 *${prefix}WEATHER <ᴄɪᴛʏ>*
*╰┈───────────────•*
*[ • 🧠 AI-CMD 🧠  ‎• ]*
*╭┈───────────────•*
*┋*🧠 *${prefix}GPT <ᴛᴇxᴛ>*
*┋*🧠 *${prefix}SARKAR <ᴛᴇxᴛ>*
*┋*🧠 *${prefix}BOT <ᴛᴇxᴛ>*
*╰┈───────────────•*
*[ • 🚻 GROUP-CMD 🚻 ‎• ]*
*╭┈───────────────•*
*┋*⛔️ *${prefix}DELETE <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋*🤝 *${prefix}ADD*
*┋*🦵 *${prefix}KICK*
*┋*👋 *${prefix}SETGOODBYE <ᴛᴇxᴛ>*
*┋*🤗 *${prefix}SETWELOCME <ᴛᴇxᴛ>*
*┋*👨👑 *${prefix}PROMOTE*
*┋*👑👨 *${prefix}DEMOTE*
*┋*🎳 *${prefix}TAGALL*
*┋*⏬️ *${prefix}GETPIC*
*┋*♻️ *${prefix}INVITE*
*┋*❓️ *${prefix}REVOKE*
*┋*✅️ *${prefix}JOINREQUESTS*
*┋*🔱 *${prefix}ALLREQ*
*┋*🔇 *${prefix}MUTE*
*┋*🔊 *${prefix}UNMUTE*
*┋*🔒 *${prefix}LOCKGC*
*┋*🔓 *${prefix}UNLOCKGC*
*┋*😞 *${prefix}LEAVE*
*┋*🏷 *${prefix}UPDATEGNAME*
*┋*♻️ *${prefix}UPDATEGDESC*
*┋*🫂 *${prefix}JOIN*
*┋*👣 *${prefix}HIDETAG*
*┋*ℹ️ *${prefix}GINFO*
*┋*🕛 *${prefix}DISAPPEAR ᴏɴ*
*┋*🕛 *${prefix}DISAPPEAR ᴏғғ*
*┋*🕛 *${prefix}DISAPPEAR 7ᴅ 24ʜ 90ᴅ*
*┋*ℹ️ *${prefix}SENDDM*
*╰┈───────────────•*
*[ • ⚠️ INFO-CMD ⚠️ ‎• ]*
*╭┈───────────────•*
*┋*📃 *${prefix}MENU*
*┋*🧠 *${prefix}ABOUT*
*┋*📜 *${prefix}SCRIPT*
*┋*📂 *${prefix}REPO*
*┋*🧬 *${prefix}ALIVE*
*┋*📃 *${prefix}ʙᴏᴛɪɴ*
*┋*🗿 *${prefix}STATUS*
*┋*💸 *${prefix}SUPPORT*
*┋*📍 *${prefix}PING*
*┋*🛠 *${prefix}RUNTIME*
*╰┈───────────────•*
*[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*
*╭┈───────────────•*
*┋*⏬️ *${prefix}FB <ᴜʀʟ>*
*┋*⏬️ *${prefix}INSTA <ᴜʀʟ>*
*┋*⏬️ *${prefix}VIDEO <ᴜʀʟ>*
*┋*⏬️ *${prefix}GDRIVE <ᴜʀʟ>*
*┋*⏬️ *${prefix}TWITTER <ᴜʀʟ>*
*┋*⏬️ *${prefix}TT<tiktok ᴜʀʟ>*
*┋*⏬️ *${prefix}MEDIAFIRE <ᴜʀʟ>*
*┋*⏬️ *${prefix}SONG <ϙᴜᴇʀʏ>*
*┋*⏬️ *${prefix}PLAY <ᴜʀʟ>*
*┋*⏬️ *${prefix}VIDEO <ϙᴜᴇʀʏ>*
*┋*⏬️ *${prefix}VIDEO <ᴜʀʟ>*
*┋*⏬️ *${prefix}IMG <ϙᴜᴇʀʏ>*
*┋*⏬️ *${prefix}APK <ɴᴀᴍᴇ>*
*┋*⏬️ *${prefix}BAISCOPT <ᴜʀʟ>*
*┋*⏬️ *${prefix}GINISISILA <ᴛɪᴛᴛʟᴇ>*
*╰┈───────────────•*
*[ • ♻️ CONVERTER-CMD ♻️ ‎• ]*
*╭┈───────────────•*
*┋*😝 *${prefix}STICKER*
*┋*🈯️ *${prefix}TRT <ᴛᴇxᴛ>*
*┋*🔊 *${prefix}TTS <ᴛᴇxᴛ>*
*╰┈───────────────•*
*[ • ♾️ RANDOM-CMD ♾️ ‎• ]*
*╭┈───────────────•*
*┋*👑 *${prefix}KING*
*┋*🐶 *${prefix}DOG*
*┋*💢 *${prefix}ANIME*
*┋*💫 *${prefix}ANIMEGIRL*
*┋*💫 *${prefix}ANIMEGIRL1*
*┋*💫 *${prefix}ANIMEGIRL2*
*┋*💫 *${prefix}ANIMEGIRL3*
*┋*💫 *${prefix}ANIMEGIRL4*
*┋*💫 *${prefix}ANIMEGIRL5*
*╰┈───────────────•*
*[ • 🌐 OTHER-CMD 🌐 ‎• ]*
*╭┈───────────────•*
*┋*😜 *${prefix}JOKE*
*┋*🙃 *${prefix}FACT*
*┋*ℹ️ *${prefix}GITHUBSTALK*
*┋*🔑 *${prefix}GPASS*
*┋*👨‍💻 *${prefix}HACK*
*┋*⁉️ *${prefix}QUOTE*
*┋*🔍 *${prefix}REPO*
*┋*☺️ *${prefix}DEFINE*
*╰┈───────────────•*
*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠
━━━━━•⟢
*👇👇👇MY REPO LINK👇👇👇*
━━━━━•⟢
┏━━━━━━━━━━━━━━━━━━━◆
*https://github.com/Sarkar-Bandaheali/BALOCH-MD*
┗━━━━━━━━━━━━━━━━━━━◆

*•────────────•⟢*
> © _CREATED BY BANDAHEALI_
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/autovoice/file-KegkWLpfvrRHPJDpD5iTRB%20(1).webp`},caption:madeMenu},{quoted:mek});


}catch(e){
console.log(e)
reply(`${e}`)
}
})
