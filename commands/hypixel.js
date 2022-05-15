const axios = require('axios');
require('dotenv').config();
const { Message } = require('discord.js');

module.exports = {
    name: 'hypixel',
    description: 'Hypixel / Pit commands! Verify yourself :D',
     /**
     * 
     * @param {String[]} args 
     * @param {Message} message 
     */
    async execute(message, args) {
        const playerName = args.join(' ');
        const playerUUID = "7aaf4557-1b5d-4e07-bdca-4e7ff2429872"
        if(!username) return message.channel.send('enter your username!');
        await axios.get(`https://api.hypixel.net/player?key=${process.env.API_KEY}&name=${playerName}`)
          .then((res) => {
            message.channel.send({ content: res.data.player.achievements.pit_prestiges });
            message.channel.send({ content: res.data.player.socialMedia.links.DISCORD });
          })
          .catch(error => message.channel.send("An error occures"));
    }
}