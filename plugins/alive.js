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

const config = require('../config');
const { cmd, commands } = require("../command");
const axios = require('axios'); // Axios for API requests

cmd({
  'pattern': "alive",
  'react': '🌐',
  'desc': "Check bot online or not.",
  'category': "main",
  'filename': __filename
}, async (client, message, args, extra) => {
  try {
    const { from, quoted, reply } = extra;

    // Fetch random quote from API
    const quoteResponse = await axios.get('https://zenquotes.io/api/random');
    const randomQuote = quoteResponse.data[0]?.q || "Stay positive and keep pushing forward!";
    const author = quoteResponse.data[0]?.a || "Anonymous";

    // Create Alive Message Content
    const aliveMessage = `
╭━━━━━━━━━━━━━━━━━━━
┃ 🤖 *Bot Status:* Online ✅
┃ ⏱ *Runtime:* ${process.uptime().toFixed(2)} seconds
┃ 👤 *Owner:* ${config.OWNER_NAME}
┃ 📞 *Contact:* ${config.OWNER_NUMBER}
┃ 📝 *Quote:* 
┃ _"${randomQuote}"_ 
┃ - *${author}*
╰━━━━━━━━━━━━━━━━━━━
    `;

    // Send Alive Message with Image
    return await client.sendMessage(from, {
      image: { url: config.ALIVE_IMG },
      caption: aliveMessage
    }, { quoted });
  } catch (error) {
    console.log(error);
    reply("An error occurred: " + error.message);
  }
});
