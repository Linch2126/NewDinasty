const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("OTUwNzAxMjk0OTQ1OTcyMjQ2.Yicvkw.Ou8yY_25BSqTd4K6UUFj5nZpdvw")

client.on("ready", () => {
    console.log("Bot Online")
})

client.on("messageCreate", (message) => {
    if (message.content == "$spam") {
        message.channel.send("Spamtxt1")
        message.channel.send("Spamtxt2")
        message.channel.send("Spamtxt3")
        message.channel.send("Spamtxt4")
        message.channel.send("Spamtxt5")
    }

    if (message.content == "$help") {
        message.channel.send("Lista comandi: ...")
    }

    if (message.content == "$embed") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Titolo")
            .setDescription("Descrizione")

        message.channel.send({ embeds: [embed] })
    }

    if (message.content == "$embed1") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Titolo")
            .setDescription(`@${message.author.username} ha scritto il messaggio`)

        message.channel.send({ embeds: [embed] })
    }
})


