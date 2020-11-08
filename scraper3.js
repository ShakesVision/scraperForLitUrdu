const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    // let url = 'https://www.rekhta.org/ghazals/sunaa-hai-log-use-aankh-bhar-ke-dekhte-hain-ahmad-faraz-ghazals?sort=popularity-desc&lang=hi';
    // let url = 'https://www.rekhta.org/ghazals/ultii-ho-gaiin-sab-tadbiiren-kuchh-na-davaa-ne-kaam-kiyaa-meer-taqi-meer-ghazals?lang=hi'
    let url = 'https://www.rekhta.org/stories/munasib-karravaai-saadat-hasan-manto-stories?lang=ur'
    let totalPages = 233;
    let arr = [];
    var logStream = fs.createWriteStream('MantoLog.txt', {flags: 'a'});

    await page.setDefaultNavigationTimeout(0); 
    await page.setRequestInterception(true);

    page.on('request', (req) => {
        if (req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image') {
            req.abort();
        }
        else {
            req.continue();
        }
    });

    for (let index = 0; index < totalPages; index++) {
        if (index !== 0) {
            //SELECTORS: a.prevPoem & a.nextPoem , div.poemPageContentBody, div.pMC
            await page.waitForSelector('a.prevPoem',{timeout:0});
            url = await page.$eval('.pagingSection a', el => el.href);
        }            
        await page.goto(url, { waitUntil: 'domcontentloaded' , timeout: 0});
        const text = await page.$eval('div.poemPageContentBody', el => el.innerText)
        arr.push(text)
        logStream.write(text+'\r\n*_*_*\r\n');
        console.log('page ' + (index+1) );
    }

    await browser.close()
    logStream.end('End of stream.');

    let result = arr.join('\r\n*_*_*\r\n');
    fs.writeFile("manto-ur.txt", result, (err) => {
        if (err) throw err;
        console.log('Saved!');
    });
})()