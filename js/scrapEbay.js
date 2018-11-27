var allEbayItems=[];

function scrapEbay()
{
    var main='.s-item';
    var list=allcontentebay.contentDocument.querySelectorAll(main);
    for(let each of list)
    {
        let item={};
        try{
            item.title=each.querySelector('.s-item__title').innerText;
            if(each.querySelector('.s-item__image-img').getAttribute('src').split('.').includes('gif'))
            {
            item.image='../images/default.png';
            }
            else
            {
                item.image=each.querySelector('.s-item__image-img').getAttribute('src');
            }
            if(!each.querySelector('.s-item__price').innerText.includes(' '))
            {
                item.price='&#8377;'+Math.round((each.querySelector('.s-item__price').innerText.split('$')[1])*70.80);
            
            }
            else
            {
                item.price=each.querySelector('.s-item__price').innerText;
            }
            item.accessLink=each.querySelector('.s-item__link').getAttribute('href');
        }
        catch{
            continue;
        }
        allEbayItems.push(item);   
    }
    
}