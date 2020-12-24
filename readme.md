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

**UPDATE:** I've created few bookmarklets to atleast automate the tasks of manually opening console, pasting the code etc. Just click on the bookmarklet and viola!

Use the clickable bookmarklets from [here](https://www.shakeeb.in/2020/12/rekhta-content-scraper-by-shakeeb-ahmad.html).

### Unobfuscated Codes for the Bookmarklets
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