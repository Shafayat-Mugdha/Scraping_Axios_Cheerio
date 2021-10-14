const request = require('request');
const cheerio = require('cheerio');

request('https://www.mobile.de/', (error, response, html) => {
    if(!error && response.statusCode == 200){
        // console.log(html);
        const $ = cheerio.load(html);

        const title = $('.private-selling-box__cell');

        console.log(title.html());
        // console.log("error");
    }
});