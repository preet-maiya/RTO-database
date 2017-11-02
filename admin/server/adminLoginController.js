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

module.exports.learenrList = function(req,res){
  query = 'select application_no,user,fname,lname,id_proof,age_proof from learnerlicense where passed = "false"'
  connection.query(query, function(err, results, fields){
    if(err) console.log(err)
    else {
      console.log(results)
      res.send(results)
    }
  })
}

module.exports.approve = function(req,res){
  user = req.body.user;
  no = req.body.no;
  query = "update learnerlicense set passed='true' where user='"+user+"' and application_no="+no
  connection.query(query, function(err,results,fields){
    if (err) {console.log(err);res.json({success:false, error: err})}
    else {console.log(results);res.json({success:true})}
  })
}

//module.exports.delte
