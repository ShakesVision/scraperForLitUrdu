# Scrape data using list of links - Easy and Fast
The output for prose is an JavaScript object, which is what I needed. You can modify it for your needs. 
I'll publish the changes most likely on my blog: www.shakeeb.in

## What can it do
The code works for both Prose and Poetry. Comment/Uncomment the codes for your needs.

## Install
1. Clone the repo.
`git clone https://github.com/ShakesVision/scraperForLitUrdu.git`
2. Change the diretory using `cd scraperForLitUrdu`
3. Run `npm install`

## Run
1. Add a file with all the links inside `./links` directory.
2. Run `node scraper`

## How to get the links? 
For now, I've not automated the links collection, will do in the future. Till then:

**UPDATE:** I've created few bookmarklets to atleast automate the following tasks of manually opening console etc. Just click on the bookmarklet and viola!

*Drag and drop the links to the bookmarks bar in your browser. (Ctrl+Shift+b to toggle the bar)*

[CopyRekhtaLinks](javascript%3A%27use+strict%27%3Bvoid+function%28%29%7Bvar+a%3Ddocument.querySelectorAll%28%22div.contentListBody.contentLoadMoreSection.nwPoetListBody+%3E+div%22%29%2Cb%3D%5B%5D%3Ba.forEach%28function%28c%29%7Bvar+d%3Dc.querySelector%28%22a%3Anth-child%282%29%22%29%3Bd.hasAttribute%28%22class%22%29%7C%7Cb.push%28d.href%29%7D%29%2Cconsole.log%28b.join%28%22%5Cn%22%29%29%3Bvar+c%3Ddocument.createElement%28%22textarea%22%29%3Bc.value%3Db.join%28%22%5Cn%22%29%2Cdocument.body.appendChild%28c%29%2Cc.select%28%29%2Cdocument.execCommand%28%22Copy%22%29%2Cdocument.body.removeChild%28c%29%2Calert%28b.length%2B%22+links+copied%21%22%29%7D%28%29%3B)

[CopyRekhta{}](javascript:%22use%20strict%22;void%20function(){var%20b=document.querySelector(%22h1%22).innerText,c=document.querySelector(%22.authorAddFavorite%22).innerText,d=document.querySelector(%22.poemPageContentBody%22).innerText,e=document.createElement(%22a%22);e.href=window.location.href;var%20a=e.pathname.replace(/\/.+\//,%22%22).replace(/-stories$/,%22%22),f=a.split(%22-%22).join(%22%20%22).split(%22%20%22).map(function(a){return%20a.charAt(0).toUpperCase()+a.substring(1)}).join(%22%20%22)+%22%20in%20Urdu%20Unicode%20text.\n%22+c+%22%20\u06A9\u0627%20\u0627\u0641\u0633\u0627\u0646\u06C1%20\%22%22+b+%22\%22%20\u0627\u0631\u062F\u0648%20\u06CC\u0648\u0646\u06CC\u06A9\u0648\u0688%20\u0645\u062A\u0646%20\u0645\u06CC\u06BA\u06D4%22,g={title:b+%22%20\u2014%20%22+c,text:d.replaceAll(%22\n\n%22,%22\n%22),label:%22\u0627\u0641\u0633\u0627\u0646\u06D2,\u0645\u0635\u0646\u0641:%22,description:f,link:a};console.log(g);var%20h=document.createElement(%22textarea%22);h.value=JSON.stringify(g),document.body.appendChild(h),h.select(),document.execCommand(%22Copy%22),document.body.removeChild(h),alert(%22Object%20copied%20with%20details!%22)}();)

[BloggerPaste](javascript%3A%27use%2520strict%27%3Bvoid%2520function%28%29%7Bdocument.querySelectorAll%28%2522input%2522%29%5B2%5D.value%3Do.title%2Cdocument.querySelector%28%2522%5Baria-label%3D%5C%2522Title%5C%2522%5D%2522%29.value%3Do.title%2Cdocument.querySelector%28%2522%5Baria-label%3D%5C%2522Enter%2520search%2520description%5C%2522%5D%2522%29.value%3Do.description%2Cdocument.querySelector%28%2522%5Baria-label%3D%5C%2522Custom%2520Permalink%2520Input%5C%2522%5D%2522%29.value%3Do.link%2Cdocument.querySelector%28%2522%5Baria-label%3D%5C%2522Separate%2520labels%2520by%2520commas%5C%2522%5D%2522%29.value%3Do.label%2Cdocument.querySelector%28%2522body.editable%2522%29.innerText%3Do.text%7D%28%29%3B)


### Unobfuscated Codes of the Bookmarklets
Putting it here just to make sure I can create a bookmarklet whenever I need using [bookmarkleter](https://chriszarate.github.io/bookmarkleter/).
**CopyRekhtaLinks:**
```
var all = document.querySelectorAll('div.contentListBody.contentLoadMoreSection.nwPoetListBody > div');
var arr = [];
all.forEach(div => {
var a =div.querySelector('a:nth-child(2)');
if(!(a.hasAttribute('class'))) arr.push(a.href)});
console.log(arr.join('\n'));
var myTemporaryInputElement = document.createElement("textarea");
myTemporaryInputElement.value = arr.join('\n');
document.body.appendChild(myTemporaryInputElement);
myTemporaryInputElement.select();
document.execCommand("Copy");
document.body.removeChild(myTemporaryInputElement);
alert(arr.length + ' links copied!')
```
**CopyRekhta{}:**
```
var heading=document.querySelector("h1").innerText,author=document.querySelector(".authorAddFavorite").innerText,text=document.querySelector(".poemPageContentBody").innerText,a=document.createElement("a");a.href=window.location.href;var link=a.pathname.replace(/\/.+\//,"").replace(/-stories$/,""),description=link.split("-").join(" ").split(" ").map(e=>e.charAt(0).toUpperCase()+e.substring(1)).join(" ")+" in Urdu Unicode text.\n"+author+' کا افسانہ "'+heading+'" اردو یونیکوڈ متن میں۔',o={title:heading+" — "+author,text:text.replaceAll('\n\n','\n'),label:"افسانے,مصنف:",description:description,link:link};
console.log(o);
var myTemporaryInputElement = document.createElement("textarea");
myTemporaryInputElement.value = JSON.stringify(o);
document.body.appendChild(myTemporaryInputElement);
myTemporaryInputElement.select();
document.execCommand("Copy");
document.body.removeChild(myTemporaryInputElement);
alert('Object copied with details!')
```
**BloggerPaste:**
```
document.querySelectorAll('input')[2].value = o.title;
document.querySelector('[aria-label="Title"]').value = o.title;
document.querySelector('[aria-label="Enter search description"]').value = o.description;
document.querySelector('[aria-label="Custom Permalink Input"]').value = o.link;
document.querySelector('[aria-label="Separate labels by commas"]').value = o.label;
document.querySelector('body.editable').innerText = o.text;
```


### PREVIOUS MANUAL APPROACH
Only use these if you need to change something and it's not included in the bookmarklets above.

1. Open the page with list of all URLs.
2. Open JavaScript console on the page (Shortcut: F12)
3. Paste this little script and hit enter:
```
var all = document.querySelectorAll('div.contentListBody.contentLoadMoreSection.nwPoetListBody > div');
var arr = [];
all.forEach(div => {
var a =div.querySelector('a:nth-child(2)');
if(!(a.hasAttribute('class'))) arr.push(a.href)});
console.log(arr.join('\n'));
document.body.innerText = arr.join('\n');
```
If links are less in number, select and copy them directly. But for large number of links, continue.

4. Right-click on the array object and select `Store as global variable`. It will add the log to a variable `temp1`
5. Run `copy(temp1)`. All links will be copied to your clipboard. Paste it in a file under `./links` folder.


## Disclaimer
I'm experimenting all this, so expect the code to change often. 