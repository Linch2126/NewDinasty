const Discord = require("discord.js")
const client = new Discord.Client({intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]})
client.login(process.env.token)
client.on("ready", () => {console.log("Bot Online")})

client.on('messageCreate', async (message) =>{
    if (!client.application?.owner) {
        await client.application?.fetch();
    }

    if (message.content.tolowerCase() === '$registra' && message.author.id === client.application?.owner.id) {
        
    }
})