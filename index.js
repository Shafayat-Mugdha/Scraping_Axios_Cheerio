// const cors = require('cors')({origin: true});
const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
// const fs = require('fs');
// const url = 'https://www.mysmartprice.com/mobile/pricelist/mobile-price-list-in-india.html';

const url = 'https://suchen.mobile.de/fahrzeuge/search.html?dam=0&isSearchRequest=true&ms=25200;;29&sfmr=false&vc=Car';
const getweb = async (url) => {

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    // console.log($);
    

    $(".rbt-top").map((index , elements) => {
        const title = $(elements).find(".u-text-break-word").text()
        console.log(title)
        
    });
    
    
}
getweb(url);

