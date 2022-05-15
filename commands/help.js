module.exports = {
    name: 'help',
    description: 'lists the bot commands',
    execute(message, args) {
        message.channel.send(`
        **del help** - The help command\n**del ping** - Try it!\n**del socials** - my socials\ndel img <argument> - get a picture of <argument>! For example: del img floppa
        `)
    }
}