var express = require('express');
var app = express()
var multer = require('multer');
var mysql = require('mysql')
var bodyParser = require('body-parser')
var userController = require('./server/userLoginController')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maiya',
  database : 'rto'
});

//For use of multer
app.use(function(req, res, next) { //allow cross origin requests
      res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
      res.header("Access-Control-Allow-Origin", "http://localhost");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

var storage = multer.diskStorage({ //multers disk storage settings
      destination: function (req, file, cb) {
          cb(null, './uploads/');
      },
      filename: function (req, file, cb) {
          var datetimestamp = Date.now();
          console.log(req.body);
          var user = file.originalname.split('~')[0];
          var type = file.originalname.split('~')[1];
          var add = "update learnerlicense set "+type+"='./uploads/"+file.originalname + '-' + datetimestamp+"' where user='"+user+"'"
          console.log(add)
          connection.query(add, function(err){
            if(err)
            console.log(err)
          })
          cb(null, file.originalname + '-' + datetimestamp);
      }
  });

  var upload = multer({ //multer settings
                  storage: storage
              }).single('file');
//End of multer settings

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

app.use('/', express.static(__dirname + '/client/'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.post('/login',userController.login);
app.post('/register', userController.register)
app.get('/LandingPage', function(req,res){
  res.send("<h1>You made it!!</h1>")
})
app.get('/get_name', userController.get_name)
app.post('/learnersLicenceForm1', userController.learnersLicenceForm1)

app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });
    });

app.listen(8080, function(){
  console.log('8080')
})
