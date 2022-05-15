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
              let rank = '';
              if (res.data.player.rank) { // Check if is ADMIN, MOD, HELPER, YT...
                rank = res.data.player.rank; // player.prefix exist here as well
            } else if (res.data.player.monthlyPackageRank && res.data.player.monthlyPackageRank !== 'NONE') { // Check if is MVP++
                rank = 'MVP++'
            } else if (res.data.player.newPackageRank) { // Check if is VIP...MVP+
                rank = res.data.player.newPackageRank.replace('_PLUS', '+')
            } else {
                rank = 'Non-Rank';
            } // end of calculating ranks

            console.log('test')
            console.log(rank)

            if (!(discordId === message.member.user.tag)) {
                message.channel.send(`Discord account linked to ${playerName} is not yours!`)
            } else {
                var role= member.guild.roles.cache.find(role => role.name === "Verified");
                member.roles.add(role);
                message.channel.send(`Congrats ${discordId}, you are now verified as ${playerName}! (${rank})`)
                console.log(role);
                console.log(rank);
            }

           // message.channel.send({ content: res.data.player.achievements.pit_prestiges });
            // message.channel.send({ content: res.data.player.socialMedia.links.DISCORD });
          })
          .catch(error => message.channel.send("An error occured, try again in 1 minute or ask admins for help"));
    }
}