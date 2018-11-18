var allAmazonItems=[];
var main='s-item-container'
function scrapAmazon(main)
{
    var list=allcontentAmz.contentDocument.querySelectorAll('.s-item-container');
    for(let each of list)
    {
        let item={};
        try{
            item.title=each.querySelector('h2').innerText;
            item.image=each.querySelector('img').getAttribute('src');
            item.price=each.querySelector('.currencyINR').parentNode.innerText;
            item.accessLink=each.querySelector('a').getAttribute('href');
        }
        catch{
            continue;
        }
        allAmazonItems.push(item);   
    }
    
}