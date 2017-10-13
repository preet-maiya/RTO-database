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
  var query = 'select password from admin_login where username="'+userid+'"'
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

module.exports.get_all = function(req,res){
  console.log(req.query)
  query = 'select * from user_login'
  connection.query(query, function(error, results,fields){
    if(error) res.send(error)
    else{
      console.log(results)
      // console.log("Okas");
      res.send(results);
      // res.send(results[0])
    }
  })
}
