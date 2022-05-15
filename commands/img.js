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
        const image_results = await google.scrape(image_query, 50);
        console.log('results', image_results)
        message.channel.send(image_results[Math.floor(Math.random() * 50)].url);
    }
}