module.exports = {
    name: 'help',
    description: 'lists the bot commands',
    execute(message, args) {
        message.channel.send(`
        \`del help\` - The help command\n\`del ping\` - Try it!\n\`del socials\` - my socials\n\`del img <argument>\` - try \`del img floppa\`
        `)
    }
}