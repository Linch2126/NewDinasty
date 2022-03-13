const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot Online to 2")
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
            .addField("$clear", "per eliminare un tot di messaggi", true)
            .addField("$serverinfo", "per vedere tutte le info sul server", true) 
            .addField("$userinfo", "per vedere tutte le info su un utente", true)
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




//Comandi Complessi

client.on("guildMemberAdd", (member) => {
    client.channels.cache.get("952542863810506872").send("Benvenuto " + member.toString() + " in " + member.guild.name + ", sei il " + member.guild.member.Count + "° membro");
})

client.on("messageCreate", (message) => {
    if(message.content.startsWith("$clear")){
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            message.channel.send("Non hai il permesso");
            return;
        }
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")){
            message.channel.send("Non ho il permesso")
            return
        }

        var count = message.content.slice(7);
        count = parseInt(count);

        if(!count){
            message.channel.send("Inserisci un numero valido");
            return
        }

        message.channel.bulkDelete(count, true);
        message.channel.send("Ho eliminato " + count + " messaggi")
        .then(msg =>{
            msg.delete({ timeout:2000 })
        })
    }
})






client.on("messageCreate", message => {
    if (message.content == "$serverinfo") {
        var server = message.member.guild;

        var botCount = server.members.cache.filter(member => member.user.bot).size;
        var utentiCount = server.memberCount - botCount;

        var categoryCount = server.channels.cache.filter(c => c.type == "category").size
        var textCount = server.channels.cache.filter(c => c.type == "text").size
        var voiceCount = server.channels.cache.filter(c => c.type == "voice").size

        var embed = new Discord.MessageEmbed()
            .setTitle(server.name)
            .setDescription("Tutte le info su questo server")
            .setThumbnail(server.iconURL())
            .addField("Owner", "```" + server.owner.user.username + "```", true)
            .addField("Server id", "```" + server.id + "```", true)
            .addField("Server region", "```" + server.region + "```", true)
            .addField("Members", "```Total: " + server.memberCount + " - Users: " + utentiCount + " - Bots: " + botCount + "```", false)
            .addField("Channels", "```Category: " + categoryCount + " - Text: " + textCount + " - Voice: " + voiceCount + "```", false)
            .addField("Server created", "```" + server.createdAt.toDateString() + "```", true)
            .addField("Boost level", "```Level " + server.premiumTier + " (Boost: " + server.premiumSubscriptionCount + ")```", true)

        message.channel.send(embed)

    }
});





client.on("messageCreate", message => {
    if (message.content.startsWith("$userinfo")) {
        if (message.content == "$userinfo") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }

        if (!utente) {
            message.channel.send("Non ho trovato questo utente")
            return
        }

        var elencoPermessi = "";
        if (utente.hasPermission("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR";
        }
        else {
            var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"]

            for (var i = 0; i < permessi.length; i++) {
                if (utente.hasPermission(permessi[i])) {
                    elencoPermessi += "- " + permessi[i] + "\r";
                }
            }
        }

        var embed = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setDescription("Tutte le info di questo utente")
            .setThumbnail(utente.user.avatarURL())
            .addField("User id", "```" + utente.user.id + "```", true)
            .addField("Status", "```" + utente.user.presence.status + "```", true)
            .addField("Is a bot?", utente.user.bot ? "```Yes```" : "```No```", true)
            .addField("Account created", "```" + utente.user.createdAt.toDateString() + "```", true)
            .addField("Joined this server", "```" + utente.joinedAt.toDateString() + "```", true)
            .addField("Permissions", "```" + elencoPermessi + "```", false)
            .addField("Roles", "```" + utente.roles.cache.map(ruolo => ruolo.name).join("\r") + "```", false)

        message.channel.send(embed)

    }
});



/* By Linch#2126 */