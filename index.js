const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot Online")
})

var messaggi = ["Testa", "Croce", "Testa", "Testa", "Croce", "Testa", "Croce", "Croce", "Testa", "Croce",]

client.on("messageCreate", (message) => {
    if (message.content == "Hey newdinasty") {
        message.channel.send(`Ciao @${message.author.username}, digita $help per scoprire i comandi del bot!`)
    }

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
        var embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("Lista comandi")
            .setDescription(`@${message.author.username} ecco la lista dei comandi:!`)
            .addField("$help", "lista comandi", true)
            .addField("$privato", "per mandare un messaggio in privato", true)
            .addField("$moneta", "il bot tirerà una moneta", true)
            .addField("$file", "il bot manderà un file", true)
            .addField("$embed", "per mandare un embed", true)
            .addField("$spam", "per mandare messaggi di spam", true)
            .setFooter("Eccoti la lista dei comandi!")
            .setTimestamp();

        message.channel.send({ embeds: [embed] })
    }

    if(message.content == "$privato") {
        message.author.send("Hey, ciao questo è un messaggio in privato")
    }

    if(message.content == "$moneta") {
        var random = Math.floor(Math.random() * messaggi.length)
        message.channel.send(message.author.toString() + " E' uscito:" + messaggi[random]);
    }

    if(message.content == "$file") {
        message.channel.send("File: ", {files: ["https://www.facebook.com/images/fb_icon_325x325.png"]});
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


