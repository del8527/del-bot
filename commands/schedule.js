module.exports = {
    name: 'schedule',
    description: 'schedule, beta',
    execute(message, args) {
        message.channel.send(`M237 Mobius - Tuesday @ 4pm \n
        M237 WA - Friday @ 9am\n
        CS246 OH - https://student.cs.uwaterloo.ca/~cs246/S22/officehours.shtml`)
    }
}