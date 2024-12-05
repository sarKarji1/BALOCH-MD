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
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd(
    {
        pattern: "sarkar",
        alias: ["gpt", "bot"],
        react: "📑",
        desc: "AI chat using GPT.",
        category: "main",
        filename: __filename,
    },
    async (
        conn,
        mek,
        m,
        {
            from,
            quoted,
            body,
            isCmd,
            command,
            args,
            q,
            isGroup,
            sender,
            senderNumber,
            botNumber2,
            botNumber,
            pushname,
            isMe,
            isOwner,
            groupMetadata,
            groupName,
            participants,
            groupAdmins,
            isBotAdmins,
            isAdmins,
            reply,
        }
    ) => {
        try {
            // Input Validation
            if (!q || q.trim().length === 0) {
                return reply("❌ Please provide a valid query for the AI chat.");
            }

            // Fetching API Response
            let data;
            try {
                data = await fetchJson(
                    `https://www.dark-yasiya-api.site/ai/chatgpt?q=${encodeURIComponent(q)}`
                );
            } catch (fetchError) {
                console.error("API Fetch Error:", fetchError);
                return reply("❌ Unable to connect to the API. Please try again later.");
            }

            // Validate API Response Structure
            if (!data || !data.result) {
                console.error("Invalid API Response:", data);
                return reply("❌ API returned an invalid response. Please contact the administrator.");
            }

            // Sending AI Response
            return reply(`🤖 *BALOCH-MD RESPONCE:*\n\n${data.result}`);
        } catch (error) {
            console.error("Unexpected Error:", error);

            // Handle Unexpected Errors
            return reply("❌ An unexpected error occurred. Please try again.");
        }
    }
);