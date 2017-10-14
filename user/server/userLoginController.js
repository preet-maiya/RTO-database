var mysql = require('mysql')

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
  var userid = req.body.userid
  var password = req.body.password
  var statement = 'insert into user_login values ("'+userid+'","'+password+'")';
  connection.query(statement, function (error, results, fields) {
  if (error){
    console.log(error)
    if(error[code]==='ER_DUP_ENTRY')
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
