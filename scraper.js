const puppeteer = require('puppeteer');
const fs = require('fs');

let url = `https://www.urduweb.org/mehfil/forums/%D8%A7%D9%81%D8%B3%D8%A7%D9%86%DB%92.97/`;
let arr =[];
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();    
    await page.goto(url);
    var lastPageNumber = 6; 
    for (let pg = 2; pg <= lastPageNumber; pg++) {        
        await page.waitFor(1000);        
        // You can use results.push, but will get collection of collections at the end of iteration
        arr = arr.concat(await extractedEvaluateCall(page));        
        if (pg != lastPageNumber+1) {
            url += 'page-'+pg;
            await page.goto(url);            
        }
    }        

    await browser.close();
    let links = arr.join('\r\n');
    fs.writeFile("links.txt", links, (err)=>{
        if (err) throw err;
        console.log('Saved!');
    });
    
})();

async function extractedEvaluateCall(page) {        
        await page.evaluate(() => {
            let data = [];
            let a = document.querySelectorAll(".discussionListItem .title");
            a.forEach(el => {             
                if ((el.querySelector("a:nth-child(2)"))) 
                    data.push((el.querySelector("a:nth-child(2)[href]")));
                else data.push((el.querySelector("a[href]")));
            });
            return data;
        });            
}