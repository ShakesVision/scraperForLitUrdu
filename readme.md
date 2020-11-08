# Scrape data using list of links - Easy and Fast
The output for prose is an JavaScript object, which is what I needed. You can modify it for your needs. 
I'll publish the changes most likely on my blog: www.shakeeb.in

## What can it do
The code works for both Prose and Poetry. Comment/Uncomment the codes for your needs.

## Install
1. Clone the repo.
`git clone https://github.com/ShakesVision/scraperForLitUrdu.git`
2. Change the diretory using `cd scraperForLitUrdu`
3. Run `npm init`

## Run
1. Add a file with all the links inside `./links` directory.
2. Run `node scraper`

## How to get the links? 
For now, I've not automated the links collection, will do in the future. Till then:
1. Open the page with list of all URLs.
2. Open JavaScript console on the page (Shortcut: F12)
3. Paste this little script and hit enter:
```
var all = document.querySelectorAll('div.contentListBody.contentLoadMoreSection.nwPoetListBody > div');
var arr = [];
all.forEach(div => {
var a =div.querySelector('a:nth-child(2)');
if(!(a.hasAttribute('class'))) arr.push(a.href)});
console.log(arr)
```
If links are less in number, select and copy them directly. But for large number of links, continue.

4. Right-click on the array object and select `Store as global variable`. It will add the log to a variable `temp1`
5. Run `copy(temp1)`. All links will be copied to your clipboard. Paste it in a file under `./links` folder.

## Disclaimer
I'm experimenting all this, so expect the code to change often. 