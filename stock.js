const  express = require('express');
const  path = require('path');
const app = express();
const {engine}= require('express-handlebars');
const request = require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT||5000;

app.engine('handlebars', engine() );
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended:false}));


function callStockAPI(doneAPI, ticker){
if (ticker==undefined) ticker = 'JWN';

request('https://api.polygon.io/v1/open-close/'+ ticker + '/2023-01-09?adjusted=true&apiKey=xczooZo7PIn1T2Cp90VJplKQ2fxq6y6c',{json:true}, (err, res, body)=>{
    if (err){ return console.log(err)
    }
    console.log(ticker);

    if (res.statusCode ===200)        
    {     
       doneAPI(body)     
    }
})}

app.get('/', function(req, res) {
callStockAPI(function(doneAPI){            
res.render('home', {stock:doneAPI});
});   
});

app.post('/', function(req, res) {
    callStockAPI(function(doneAPI){  
    stock4Curious = req.body.stock_ticker; 
    res.render('home', {stock:doneAPI, stock4Curious:stock4Curious});}, req.body.stock_ticker)
});   

app.get('/about.html', function(req, res){
    res.render('About', {stuff:"Ths is my about page stuff"});
});

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=>{
    console.log('server is listening ' + PORT);
})


