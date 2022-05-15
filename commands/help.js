module.exports = {
    name: 'help',
    description: 'lists the bot commands',
    execute(message, args) {
        message.channel.send(`
        \`del help\` - The help command\n\`del ping\` - Try it!\n\`del socials\` - my socials\n\`del img <argument>\` - try \`del img floppa\`
        `)
        message.channel.send(`\`del verify <ign>\` - Verify using Hypixel API!`)
        message.channel.send(`How to verify yourself
        1. Log on to Hypixel, go to /hub
        2. Click on your player head (your profile)
        3. Go to the Social Media category
        4. Click on discord and type your own discord exactly there. (Ex: del#8527) Dont use a space, dont use any dots either and it’s case sensitive
        
        5. Now go to this discord server, go to #verify-commands and type: 
        del verify <username>
        6. You should be verified now and should have received your prestige brackets and the ‘Verified’ role. `)
    }
}