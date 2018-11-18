var express=require('express');
var app=express();
var request = require('request');
app.get('/amazon',function(req,res){
    console.log('Request recevied');
    var search=req.param('search');
    request(`https://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=${search}`, function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        console.log('body:Available-------');
        console.log(body);
        res.end(body);
      });

})
app.get('/',function(req,res){
    console.log('Request recevied');
    var search=req.param('search');
    request(`https://www.flipkart.com/search?q=${search}`, function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        console.log('body:Available-----');
       //console.log(body);
        res.end(body);
      });
      
})
app.use(express.static('./'));

var html;



app.listen(8081);
console.log('Server running at port:8081');
