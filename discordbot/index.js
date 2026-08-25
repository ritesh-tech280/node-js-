const { Client, GatewayIntentBits } = require("discord.js");
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent],
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1];
        return message.reply({ content : 'Generating short id for' + url});
    }
    message.reply({ 
        content : "Hi I am Bot",
})
})

client.on('interactionCreate', (interaction) => {
    console.log(interaction)
    interaction.reply("pong")
})
console.log("Token Loaded", !!process.env.DISCORD_TOKEN)
client.login(process.env.DISCORD_TOKEN)