const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot Online")
})

var messaggi = ["Testa", "Croce"]

client.on("messageCreate", (message) => {
    if (message.content == "$spam") {
        message.channel.send("Spamtxt1")
        message.channel.send("Spamtxt2")
        message.channel.send("Spamtxt3")
        message.channel.send("Spamtxt4")
        message.channel.send("Spamtxt5")
        message.channel.send("Spamtxt6")
        message.channel.send("Spamtxt7")
        message.channel.send("Spamtxt8")
        message.channel.send("Spamtxt9")
        message.channel.send("Spamtxt10")
    }

    if(message.content == "$help") {
        message.channel.send("Lista comandi: $help lista comandi/ $privato per mandare un messaggio in privato/ $embed per mandare un embed")
    }

    if(message.content == "$privato") {
        message.author.send("Hey, ciao questo è un messaggio in privato")
    }

    if(message.content == "$moneta") {
        var random = Math.floor(Math.random() * messaggi.length)
        message.channel.send(message.author.toString() + " " + messaggi[random]);
    }

    if(message.content == "$file") {
        message.channel.send("File: ", {files: ["Botm.jpg"]});
    }

    if(message.content == "$embed") {
        var embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Titolo")
            .setDescription(`@${message.author.username} ha scritto il messaggio!`)
            .addField("Titolo1", "Contenuto1", false)
            .addField("Titolo2", "Contenuto2", true)
            .addField("Titolo3", "Contenuto3", true)
            .setFooter("Footer")
            .setTimestamp();

        message.channel.send({ embeds: [embed] })
    }
})


