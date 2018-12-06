var allSnapdealItems=[];
function scrapSnapdeal()
{
    var main='.product-tuple-listing';
    var list=allcontentsnapdeal.contentDocument.querySelectorAll(main);
    for(let each of list)
    {
        let item={};
        try{
            item.title=each.querySelector('.product-title').innerText;
            if(each.querySelectorAll('.product-image')[1].getAttribute('src'))
            {
                item.image=each.querySelectorAll('.product-image')[1].getAttribute('src');

            }
            else
            {
                item.image='../images/snapdeal-default.png';
            }
            
            item.price=each.querySelector('.product-price').innerText;
            item.accessLink=each.querySelector('.dp-widget-link').getAttribute('href');
        }
        catch{
            continue;
        }
        allSnapdealItems.push(item);   
    }
    
}