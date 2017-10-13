var express = require('express');
var app = express()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var adminController = require('./server/adminLoginController')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maiya',
  database : 'rto'
});
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

app.use('/', express.static(__dirname + '/client/'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.post('/login',adminController.login);
app.get('/LandingPage', function(req,res){
  res.send("<h1>You made it!!</h1>")
});
app.get('/get_all', adminController.get_all)

app.listen(8081, function(){
  console.log('8081')
})