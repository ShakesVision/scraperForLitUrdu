// const fetch = require('node-fetch');
const fetch = require('node-fetch-retry');
const $ = require('node-html-parser');
const fs = require('fs');

var text = fs.readFileSync("./links/ghalib.txt", "utf-8");
var URLs = text.split('\n');
var passedUrls = [];
var failedUrls = [];
var count = URLs.length;
var writeStream = fs.createWriteStream('./data/ghalib-hi.txt', { flags: 'a' });
var failedStream = fs.createWriteStream('./links/failed.txt', { flags: 'a' });

for (let i = 0; i < URLs.length; i++) {
    (async () => {
        try {
            var url = URLs[i];
            let opts = {
                method: 'GET',
                retry: 3,
                pause: 1000,
                callback: retry => { console.log(`Trying: ${retry}`) }
            }

            // let res = await fetch('https://google.com', opts)
            const response = await fetch(url, opts);
            const text = await response.text();
            // console.log(text.match(/<h4>(.*?)<\/h4>/)[1]);        
            var document = $.parse(text);
            var heading = document.querySelector('h1').rawText;
            var author = document.querySelector('.authorAddFavorite').rawText;
            var content = ''
            document.querySelectorAll('.pMC p').forEach(p => content += p.rawText + '\n');
            var a = new URL(url);
            var link = a.pathname.replace(/\/.+\//, '').replace(/-stories$/, '');
            var description = link.split("-").map(e => e.charAt(0).toUpperCase() + e.substring(1)).join(" ") + " in Urdu Unicode text.\n" + author + ' کا افسانہ "' + heading + '" اردو یونیکوڈ متن میں۔';
            var o = { title: heading + " — " + author, text: content, label: "افسانے,مصنف:" + author, description, link,url };

            var result = JSON.stringify(o);
            console.log((i + 1), heading);
            // writeStream.write((i + 1) + result + ',\n');
            writeStream.write(content+'\n\n');
            passedUrls.push(i);
            console.log(count);                            
            count--;
            // passedUrls = passedUrls.sort((a,b)=>a-b);        
        }
        catch (err) {
            console.log(err); // TypeError: failed to fetch
            // console.log('LAST URL');
            failedStream.write(url+'\n');                
        }
    })()
}
//pass fail ?
/* for (let j = 0; j < URLs.length; j++) {
    if (!(passedUrls.includes(URLs[j])))
        failedUrls.push(j);
    failedStream.write(URLs[j]);
}
console.log(failedUrls.length + 'in total. These ones: ', failedUrls.sort((a, b) => a - b)); */