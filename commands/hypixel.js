const axios = require('axios');
require('dotenv').config();
// const { Message } = require('discord.js');

module.exports = {
    name: 'hypixel',
    description: 'Hypixel / Pit commands! Verify yourself :D',
     /*
     * 
     * @param {String[]} args 
     * @param {Message} message 
     */
    async execute(message, args) {
        const playerName = args.join(' ');
        // const playerUUID = "7aaf4557-1b5d-4e07-bdca-4e7ff2429872"
        if(!playerName) return message.channel.send('enter your username!');
        await axios.get(`https://api.hypixel.net/player?key=${process.env.API_KEY}&name=${playerName}`)
          .then((res) => {
              prestige = res.data.player.achievements.pit_prestiges;
              discordId = res.data.player.socialMedia.links.DISCORD;

              if (!(discordId === message.member.user.tag)) {
                message.channel.send(discordId)
                message.channel.send(message.member.user.tag)

                  message.channel.send(`Discord account linked to ${playerName} is not yours!`)
              } else {
                msg.member.roles.add(975327636693860382)
                message.channel.send(`Congrats ${discordId}, you are now verified! (you are prestige ${prestige}`)
              }

           // message.channel.send({ content: res.data.player.achievements.pit_prestiges });
            // message.channel.send({ content: res.data.player.socialMedia.links.DISCORD });
          })
          .catch(error => message.channel.send("An error occured, try again in 1 minute or ask admins for help!"));
    }
}