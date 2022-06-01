require("dotenv").config()

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'del';
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('del is online!')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) {
    return;
}
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'socials' ) {
        client.commands.get('socials').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    } else if (command === 'img' || command === 'image') {
        client.commands.get('img').execute(message, args);
    } else if (command === 'verify') {
        client.commands.get('hypixel').execute(message, args);
    } else if (command === 'schedule') {
        client.commands.get('schedule').execute(message, args);
    } else {
        return message.channel.send('type `del help` to see the list of commands');
    }
});



client.login(process.env.CLIENT_TOKEN);