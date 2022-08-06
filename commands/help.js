module.exports = {
    name: 'help',
    description: 'lists the bot commands',
    execute(message, args) {

        if (args.join(' ') === "pit") {
        message.channel.send(`
        \`del verify <ign>\` - Verify using Hypixel API!\n
***How to verify yourself:***
**1.** Log on to Hypixel, go to /hub
**2.** Click on your player head (your profile)
**3.** Go to the Social Media category
**4.** Click on discord and type your own discord exactly there. (Ex: del#8527) Dont use a space, dont use any dots either and it’s case sensitive
**5.** Now go to a text channel and type : \`del verify <username>\` without \`<>\`
**6.** You should be verified now and should have received your prestige brackets and the ‘Verified’ role.
            
Note: Use this on servers dedicated to pit`)
        } else {
            message.channel.send(`
        \`del help\` - The help command\n\`del ping\` - Try it!\n\`del socials\` - my discord\n\`del img <argument>\` - try \`del img floppa\`\n\`del help pit\` - Helps with hypixel verification
        `)
        }
        console.log(args.join(' '))
        
    }
}