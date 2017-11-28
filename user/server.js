var express = require('express');
var app = express()
var multer = require('multer');
var mysql = require('mysql')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var dateTime = require('node-datetime');
var userController = require('./server/userLoginController')
var policeController = require('./server/policeController')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maiya',
  database : 'rto'
});

app.use(morgan('dev'))
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
          console.log("Uploading file "+file.originalname + '-' + datetimestamp+"...")
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
app.post('/', function(req,res){
  console.log(req.body)
  res.send("You called me?");
})
app.use('/', express.static(__dirname + '/client/'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.post('/login',userController.login);
app.post('/register', userController.register)
app.get('/LandingPage', function(req,res){
  res.send("<h1>You made it!!</h1>")
})
app.get('/get_name', userController.get_name);
app.get('/applied_learners', userController.applied_learners);
app.get('/confirmed_learners', userController.confirmed_learners);

app.post('/learnersLicenceForm1', userController.learnersLicenceForm1)
app.get('/getLearnersLicenceDetails', userController.getLearnerLicenseDetails)
app.post('/driversLicence', userController.driversLicence)
app.post('/vehicleRegister', userController.vehicleRegister)
app.get('/applied_drivers', userController.applied_drivers);
app.get('/confirmed_drivers', userController.confirmed_drivers);
app.get('/fines', userController.fines);
app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             console.log("Uploading successfull")
             res.json({error_code:0,err_desc:null});
        });
    });

app.post('/policeLogin',policeController.login);
app.post('/policeRegister', policeController.register);
app.get('/getViolations', policeController.getViolations);
app.post('/fine', policeController.fine);


app.listen(8080, function(){
  console.log('8080')
})
