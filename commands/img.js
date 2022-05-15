var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
      headless: true
    }
  })
  
module.exports = {
    name: 'img',
    description: 'Scrapes google for the image passed',
    async execute(message, args) {
        const image_query = args.join(' ');
        if(!image_query) { 
            return message.channel.send('enter an image name!');
        }
        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}

// const Commands = require('commands')
// const axios = require('axios')
// 
// module.exports = class CaracalCommand extends Commands.Command {
//     constructor(client) {
//         super(client, {
//             name: 'caracal',
//             description: 'Displays a random picture of a Caracal'
//         })
//     }
// 
//     run = async (message) => {
//         axios
//             .get('https://api.jbh.rocks/image')
//             .then((res) => {
//                 console.log('RES:', res)
//             })
//             .catch((err) => {
//                 console.error('ERR:', err)
//         })
//     }
// }
