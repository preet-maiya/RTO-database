var mysql = require('mysql')
var fs = require('fs')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maiya',
  database : 'rto'
});

module.exports.login = function(req, res){
  //console.log("POST /login");
  console.log(req.body)
  var userid = req.body.userid
  var password = req.body.password
  var query = 'select password from police_login where username="'+userid+'"'
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
  //console.log("POST /register");
  console.log(req.body)
  var userid = req.body.userid;
  var password = req.body.password;
  var fname = req.body.fname;
  var lname = req.body.lname;
  var statement = 'insert into police_login values ("'+userid+'","'+password+'","'+fname+'","'+lname+'")';
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

module.exports.getViolations = function(req,res) {
  var query = "select * from violations"
  connection.query(query, function (error, results, fields) {
  if (error){
    console.log(error)
    if(error)
      res.send(false);
    }
  else {
    var r = results.sort(function (a, b) {
 return a.no - b.no;
    });
    //console.log(r);
    res.send(JSON.stringify(results))
  }
})
}

module.exports.fine = function(req,res) {
  console.log(req.body);
  res.send(true);
}
