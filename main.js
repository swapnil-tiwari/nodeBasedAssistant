    var express=require('express');
var app=express();
var fs= require('fs');
var request = require('request');
var history=[];
app.get('/history',function(req,res){

    if(req.param('json'))
    {
        res.json(history);
        return;
    }
    var result=`<head><title>History Record</title><link href='/css/style.css' rel='stylesheet' ></head><body> <table class='result_table' style=''><tr><th>Item Searched</th><th>IP</th><th>Host Name</th><th>TLS Connection</th><th>Original URL</th></tr>`
    for(let each of history)
    {
        result+=`<tr><td>${each['Item-Name']}</td><td>${each['req-IP']}</td><td>${each['req-Hostname']}</td><td>${each['req-TLS']}</td><td>${each['req-OriginalURl']}</td></tr>`
    }
    result+='</table></body>';
    res.setHeader('content-type','text/html');
    res.end(result);
})
app.get('/amazon',function(req,res){
    console.log('~Amazon Request recevied');
    var search=req.param('search');
    console.log(`Item to be searched: ${search}`);
    request(
        {
            url:`https://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=${search}`,
            headers:{
                'accept-encoding':'identity'
            }
        }, function (error, response, body) {
        //console.log('error:', error);
        console.log('-------------------------------------'); 
         
        console.log('statusCode:', response && response.statusCode);
        console.log('Amazon body:Available-------');
        console.log('-------------------------------------');
        searchedItem={
            'Item-Name':search,
            'req-Hostname':req.hostname,
            'req-TLS':req.secure,
            'req-IP':req.ip,
            'req-OriginalURl':req.originalUrl,
            'req-Path':req.path
        };
        history.push(searchedItem);
        // fs.appendFile('./files/searchHistory.txt',JSON.stringify(searchedItem),function(err){
        //     if(err) throw err;
        //     console.log("File Saved!");
        // })
        //console.log(body);
        res.end(body);
      });

})
app.get('/flipkart',function(req,res){
    console.log('~Flipkart Request recevied');
    var search=req.param('search');
    console.log(`Item to be searched: ${search}`);
    request(`https://www.flipkart.com/search?q=${search}`, function (error, response, body) {
        //console.log('error:', error);
        console.log('-------------------------------------'); 
        console.log('statusCode:', response && response.statusCode);
        console.log('Flipkart body:Available-----');
        console.log('---------------------------------------');
       //console.log(body);
        res.end(body);
      });
      
})
app.get('/ebay',function(req,res){
    console.log('~Ebay Request recevied');
    var search=req.param('search');
    console.log(`Item to be searched: ${search}`);
    request(`https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2323847.m570.l1313.TR0.TRC0.A0.H0.Xcars.TRS2&_nkw=${search}`, function (error, response, body) {
        //console.log('error:', error);
        console.log('-------------------------------------'); 
        console.log('statusCode:', response && response.statusCode);
        console.log('Ebay body:Available-----');
        console.log('---------------------------------------');
       //console.log(body);
        res.end(body);
      });
      
})
app.get('/snapdeal',function(req,res){
    console.log('~Snapdeal Request recevied');
    var search=req.param('search');
    console.log(`Item to be searched: ${search}`);
    request(`https://www.snapdeal.com/search?keyword=${search}`, function (error, response, body) {
        //console.log('error:', error);
        console.log('-------------------------------------'); 
        console.log('statusCode:', response && response.statusCode);
        console.log('Snapdeal body:Available-----');
        console.log('---------------------------------------');
       //console.log(body);
        res.end(body);
      });
      
})
   
app.use(express.static('./'));




app.listen(process.env.PORT||80);
console.log('Server running at port:80');
