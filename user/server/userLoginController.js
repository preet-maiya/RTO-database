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
  //console.log("POST /register");
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
  //console.log("GET /get_name")
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
  //console.log("POST /learnersLicenceForm");
  console.log(req.body);
  var obj = JSON.parse(fs.readFileSync('./server/applications', 'utf8'));
  var number = obj.learners++;
  fs.writeFile("./server/applications", JSON.stringify(obj), function (err) {
    if (err) {
        return console.log(err);
    }
});
  var obj1 = JSON.parse(fs.readFileSync('./server/license', 'utf8'));
  var number1 = obj1.learners++;
  fs.writeFile("./server/license", JSON.stringify(obj1), function (err) {
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
  //var data = []
  var query = "insert into learnerlicense(application_no,rto,user,fname ,lname,mobile,perm_addr,perm_city,perm_pin ,gender ,email,aadhar,temp_addr,temp_city  ,temp_pin,ll_no) values("+number+",'"+data.rto+"','"+data.user+"','"+data.fname+"','"+data.lname+"','"+data.mobile+"','"+data.perm_addr+"','"+data.perm_city+"','"+data.perm_pin+"','"+gender+"','"+email+"','"+aadhar+"','"+temp_addr+"','"+temp_city+"','"+temp_pin+"',"+number1+")"
connection.query(query, function(err,results,fields){
  if(err)
  console.log(err);
  else {
    var insert = "insert into ll_type values("+number+", '"+data.user+"', '"+data.type+"')"
    connection.query(insert, function(err,results, fields){
      if(err)
      console.log(err);
      else {
        res.send(true)
      }
    })
  }
})
}

module.exports.applied_learners = function(req,res){
  console.log(req.query)
  query = "select application_no,rto,type from learnerlicense l,ll_type t where l.application_no = t.no and l.user = '"+req.query.user+"' and passed='false'"
  connection.query(query, function(err,results,fields){
    if(err)
    console.log(err);
    else {
      res.send(results)
    }
  })
}

module.exports.confirmed_learners = function(req,res){
  console.log(req.query)
  query = "select application_no,rto,type,ll_no from learnerlicense l,ll_type t where l.application_no = t.no and l.user = '"+req.query.user+"' and passed='true'"
  connection.query(query, function(err,results,fields){
    if(err)
    console.log(err);
    else {
      res.send(results)
    }
  })
}

module.exports.getLearnerLicenseDetails = function(req,res) {
  var no = req.query.no
  query = "select * from learnerlicense l, ll_type t where l.application_no = t.no and l.ll_no = "+no+" and l.passed='true'";
  connection.query(query, function(err,results,fields){
    if (err) {console.log(err);res.json({success:false, error: err})}
    else {
      if(results.length!==0)
      {console.log(results);res.json({data:results,success:true})}
      else res.json({success:false})
    }
  })
}

module.exports.driversLicence = function(req,res) {
  console.log(req.body)
  var obj = JSON.parse(fs.readFileSync('./server/applications', 'utf8'));
  var number = obj.drivers++;
  fs.writeFile("./server/applications", JSON.stringify(obj), function (err) {
    if (err) {
        return console.log(err);
    }
});
  var obj1 = JSON.parse(fs.readFileSync('./server/license', 'utf8'));
  var number1 = obj1.drivers++;
  fs.writeFile("./server/license", JSON.stringify(obj1), function (err) {
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
  query = "insert into driverlicense(application_no,rto,user,fname ,lname,mobile,perm_addr,perm_city,perm_pin ,gender ,email,aadhar,temp_addr,temp_city  ,temp_pin,dl_no, id_proof,age_proof, type, ll_no) values("+number+",'"+data.rto+"','"+data.user+"','"+data.fname+"','"+data.lname+"','"+data.mobile+"','"+data.perm_addr+"','"+data.perm_city+"','"+data.perm_pin+"','"+gender+"','"+email+"','"+aadhar+"','"+temp_addr+"','"+temp_city+"','"+temp_pin+"',"+number1+",'"+data.id_proof+"','"+data.age_proof+"','"+data.type+"',"+data.ll_no+")"
  connection.query(query, function(err,results,fields){
    if(err)
    {console.log(err);res.send({success:false})}
    else {
      res.send({success:true})
    }
  })
}

module.exports.vehicleRegister = function(req,res) {
  console.log("Preetjak,")
  console.log(req.body);
  data = req.body.data;
  var gender = data.gender || null;
  var email = data.email || null;
  var aadhar = data.aadhar || null;
  var temp_addr = data.temp_addr || null;
  var temp_city = data.temp_city || null;
  var temp_pin = data.temp_pin || null;
  query = "insert into vehicle(rto,user,fname ,lname,mobile,perm_addr,perm_city,perm_pin ,gender ,email,aadhar,temp_addr,temp_city,temp_pin,chassis_no,engine_no,ownership,vehicle_type) values('"+data.rto+"','"+data.user+"','"+data.fname+"','"+data.lname+"','"+data.mobile+"','"+data.perm_addr+"','"+data.perm_city+"','"+data.perm_pin+"','"+gender+"','"+email+"','"+aadhar+"','"+temp_addr+"','"+temp_city+"','"+temp_pin+"',"+data.chassis_no+","+data.engine_no+",'"+data.ownership+"','"+data.type+"')"
  connection.query(query, function(err,results,fields){
    if(err)
    {console.log(err);res.send({success:false})}
    else {
      res.send({success:true})
    }
  })
}

module.exports.applied_drivers = function(req,res){
  console.log(req.query)
  query = "select * from driverlicense where user = '"+req.query.user+"' and passed='false';"
  connection.query(query, function(err,results,fields){
    if(err)
    console.log(err);
    else {
      res.send(results)
    }
  })
}

module.exports.confirmed_drivers = function(req,res){
  console.log(req.query)
  query = "select * from driverlicense where user = '"+req.query.user+"' and passed='true';"
  connection.query(query, function(err,results,fields){
    if(err)
    console.log(err);
    else {
      res.send(results)
    }
  })
}
