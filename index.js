const { Client, Intents } = require('discord.js');
const wait = require('util').promisify(setTimeout);

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Bot online!');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.on('messageCreate', async (message) => {
    if (!client.application?.owner) {
        await client.application?.fetch();
    }

    if (message.content.toLowerCase() === '!registra' && message.author.id === client.application?.owner.id) {
        const data = {
            name: 'ping',
            description: 'Risponde con pong!',
        }

        // Registra un comando GLOBALE
        // const comando = await client.application?.commands.create(data);
        // console.log(comando);

        // Registra un comando GUILD
        const comando = await client.guilds.cache.get('871746640418066474')?.commands.create(data);
        console.log(comando);
    }
})

client.login(process.env.token)