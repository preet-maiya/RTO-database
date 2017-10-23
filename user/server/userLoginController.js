var mysql = require('mysql')
var fs = require('fs')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maiya',
  database : 'rto'
});

module.exports.login = function(req, res){
  console.log(req.body)
  var userid = req.body.userid
  var password = req.body.password
  var query = 'select password from user_login where username="'+userid+'"'
  connection.query(query, function (error, results, fields) {
  if (error) res.send(error);
  else {
    if(results[0]===undefined)
    res.send(false);
    else
    {
      console.log("user "+req.body.userid+" trying to log in...\n\n")
      res.send(true);
      }
    }
  })
}

module.exports.register = function(req, res){
  console.log(req.body)
  var userid = req.body.userid;
  var password = req.body.password;
  var fname = req.body.fname;
  var lname = req.body.lname;
  var statement = 'insert into user_login values ("'+userid+'","'+password+'","'+fname+'","'+lname+'")';
  connection.query(statement, function (error, results, fields) {
  if (error){
    console.log(error)
    if(error['code']==='ER_DUP_ENTRY')
      res.send(false);
    }
  else {
    console.log('Registering...')
    res.send(true);}
})
}

module.exports.get_name = function(req,res){
  console.log(req.query);
  var user = req.query.user;
  var query = "select fname,lname from user_login where username = '"+user+"'";
  connection.query(query, function(err, results, fields){
    if(err)
      console.log(err)
    else
    {
      console.log(results)
      res.send(results);
    }
    })
}

module.exports.learnersLicenceForm1 = function(req,res){
  console.log(req.body);
  var obj = JSON.parse(fs.readFileSync('./server/applications', 'utf8'));
  var number = obj.learners++;
  fs.writeFile("./server/applications", JSON.stringify(obj), function (err) {
    if (err) {
        return console.log(err);
    }
});
  data = req.body.data;
  var gender = data.gender || null;
  var email = data.email || null;
  var aadhar = data.aadhar || null;
  var temp_addr = data.temp_addr || null;
  var temp_city = data.temp_city || null;
  var temp_pin = data.temp_pin || null;
  var query = "insert into learnerlicense values("+number+",'"+data.rto+"','"+data.user+"','"+data.fname+"','"+data.lname+"','"+data.mobile+"','"+data.perm_addr+"','"+data.perm_city+"','"+data.perm_pin+"','"+gender+"','"+email+"','"+aadhar+"','"+temp_addr+"','"+temp_city+"','"+temp_pin+"')"
connection.query(query, function(err,results,fields){
  if(err)
  console.log(err);
  else {
    res.send(true)
  }
})
}
