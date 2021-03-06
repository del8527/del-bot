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
            console.log('test1');
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

            var role = member.guild.roles.cache.find(role => role.name === rank);
            var roleVerified = member.guild.roles.cache.find(role => role.name === "Verified");
            console.log('added')
            member.roles.add('975525438262759464');
            member.roles.add(roleVerified);
            message.channel.send(`Congrats ${discordId}, you are now verified as ${playerName}! (${rank})`);

            if (!(discordId === message.member.user.tag)) {
                console.log('test3');
                message.channel.send(`Discord account linked to ${playerName} is not yours!`);
            } else {
                console.log('test4');
                var role= member.guild.roles.cache.find(role => role.name === "verified");
                member.roles.add(role);
                message.channel.send(`Congrats ${discordId}, you are now verified as ${playerName}! (${rank})`);
                console.log(role);
                console.log(rank);
            }
          })
           .catch(error => message.channel.send("An error occured, try again in 1 minute or ask admins for help"));
    }
}