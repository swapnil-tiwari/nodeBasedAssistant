var allFlipkartItems=[];
debugger;
function isElectronicView()
{
	if(allcontentFlipkart.contentDocument.querySelector('._1UoZlX'))
	{
        return true;
    }
    
        return false;
	
}
function scrapFlipkart(main)
{
    main=isElectronicView()?'._1UoZlX':'._3liAhj';
    var list=allcontentFlipkart.contentDocument.querySelectorAll(main);
    for(let each of list)
    {
        let item={};
        try{
            item.title=each.querySelector(isElectronicView()?'._3wU53n':'._2cLu-l').innerText;
            
            //item.image=each.querySelector('._3BTv9X').firstElementChild.src;
             item.price=each.querySelector('._1vC4OE').innerText;
             try{
                item.accessLink='https://www.flipkart.com'+each.querySelector('._2cLu-l').getAttribute('href');
        
             }
             catch
             {
                 item.accessLink='';
             }
        }
        catch{
            continue;
        }
        allFlipkartItems.push(item);   
    }
}