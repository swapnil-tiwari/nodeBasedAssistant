var allFlipkartItems=[];
function isElectronicView()
{
	if(allcontentFlipkart.contentDocument.querySelector('._3wU53n'))
	return true;
	return false;
}
function scrapFlipkart(main='._1UoZlX')
{
    var list=allcontentFlipkart.contentDocument.querySelectorAll(main);
    for(let each of list)
    {
        let item={};
        try{
            item.title=each.querySelector(isElectronicView()?'._3wU53n':'._2cLu-l').innerText;
            item.image=each.querySelector('._3BTv9X img').getAttribute('src');
             item.price=each.querySelector('._1vC4OE').innerText;
            // item.accessLink=each.querySelector('a').getAttribute('href');
        }
        catch{
            continue;
        }
        allFlipkartItems.push(item);   
    }
}