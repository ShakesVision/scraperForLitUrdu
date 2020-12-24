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

*Drag and drop the links to the bookmarks bar in your browser. (Ctrl+Shift+b to toggle the bar)*

[CopyRekhtaLinks][1]
[1]:javascript%3A%27use+strict%27%3Bvoid+function%28%29%7Bvar+a%3Ddocument.querySelectorAll%28%22div.contentListBody.contentLoadMoreSection.nwPoetListBody+%3E+div%22%29%2Cb%3D%5B%5D%3Ba.forEach%28function%28c%29%7Bvar+d%3Dc.querySelector%28%22a%3Anth-child%282%29%22%29%3Bd.hasAttribute%28%22class%22%29%7C%7Cb.push%28d.href%29%7D%29%2Cconsole.log%28b.join%28%22%5Cn%22%29%29%3Bvar+c%3Ddocument.createElement%28%22textarea%22%29%3Bc.value%3Db.join%28%22%5Cn%22%29%2Cdocument.body.appendChild%28c%29%2Cc.select%28%29%2Cdocument.execCommand%28%22Copy%22%29%2Cdocument.body.removeChild%28c%29%2Calert%28b.length%2B%22+links+copied%21%22%29%7D%28%29%3B

[CopyRekhta{}][2]
[2]:javascript%3A%2522use%2520strict%2522%3Bvoid%2520function%28%29%7Bvar%2520b%3Ddocument.querySelector%28%2522h1%2522%29.innerText%2Cc%3Ddocument.querySelector%28%2522.authorAddFavorite%2522%29.innerText%2Cd%3Ddocument.querySelector%28%2522.poemPageContentBody%2522%29.innerText%2Ce%3Ddocument.createElement%28%2522a%2522%29%3Be.href%3Dwindow.location.href%3Bvar%2520a%3De.pathname.replace%28%2F%5C%2F.%2B%5C%2F%2F%2C%2522%2522%29.replace%28%2F-stories%24%2F%2C%2522%2522%29%2Cf%3Da.split%28%2522-%2522%29.join%28%2522%2520%2522%29.split%28%2522%2520%2522%29.map%28function%28a%29%7Breturn%2520a.charAt%280%29.toUpperCase%28%29%2Ba.substring%281%29%7D%29.join%28%2522%2520%2522%29%2B%2522%2520in%2520Urdu%2520Unicode%2520text.%5Cn%2522%2Bc%2B%2522%2520%5Cu06A9%5Cu0627%2520%5Cu0627%5Cu0641%5Cu0633%5Cu0627%5Cu0646%5Cu06C1%2520%5C%2522%2522%2Bb%2B%2522%5C%2522%2520%5Cu0627%5Cu0631%5Cu062F%5Cu0648%2520%5Cu06CC%5Cu0648%5Cu0646%5Cu06CC%5Cu06A9%5Cu0648%5Cu0688%2520%5Cu0645%5Cu062A%5Cu0646%2520%5Cu0645%5Cu06CC%5Cu06BA%5Cu06D4%2522%2Cg%3D%7Btitle%3Ab%2B%2522%2520%5Cu2014%2520%2522%2Bc%2Ctext%3Ad.replaceAll%28%2522%5Cn%5Cn%2522%2C%2522%5Cn%2522%29%2Clabel%3A%2522%5Cu0627%5Cu0641%5Cu0633%5Cu0627%5Cu0646%5Cu06D2%2C%5Cu0645%5Cu0635%5Cu0646%5Cu0641%3A%2522%2Cdescription%3Af%2Clink%3Aa%7D%3Bconsole.log%28g%29%3Bvar%2520h%3Ddocument.createElement%28%2522textarea%2522%29%3Bh.value%3DJSON.stringify%28g%29%2Cdocument.body.appendChild%28h%29%2Ch.select%28%29%2Cdocument.execCommand%28%2522Copy%2522%29%2Cdocument.body.removeChild%28h%29%2Calert%28%2522Object%2520copied%2520with%2520details%21%2522%29%7D%28%29%3B

[BloggerPaste][3]
[3]:javascript%3A%27use%2520strict%27%3Bvoid%2520function%28%29%7Bdocument.querySelectorAll%28%2522input%2522%29%5B2%5D.value%3Do.title%2Cdocument.querySelector%28%2522%5Baria-label%3D%5C%2522Title%5C%2522%5D%2522%29.value%3Do.title%2Cdocument.querySelector%28%2522%5Baria-label%3D%5C%2522Enter%2520search%2520description%5C%2522%5D%2522%29.value%3Do.description%2Cdocument.querySelector%28%2522%5Baria-label%3D%5C%2522Custom%2520Permalink%2520Input%5C%2522%5D%2522%29.value%3Do.link%2Cdocument.querySelector%28%2522%5Baria-label%3D%5C%2522Separate%2520labels%2520by%2520commas%5C%2522%5D%2522%29.value%3Do.label%2Cdocument.querySelector%28%2522body.editable%2522%29.innerText%3Do.text%7D%28%29%3B


### Unobfuscated Codes for the Bookmarklets
Putting it here just to make sure I can create a bookmarklet whenever I need using [bookmarkleter](https://chriszarate.github.io/bookmarkleter/).

[Hello World!][1]
[1]:javascript:alert('Hello World')

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