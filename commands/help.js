module.exports = {
    name: 'help',
    description: 'lists the bot commands',
    execute(message, args) {
        message.channel.send(`
        **del ping** - Try it!\n**del socials** - my socials
        `)
    }
}