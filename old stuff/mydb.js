var mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',     // Replace with your MySQL server's host
    user: 'root', // Replace with your MySQL username
    password: 'sally', // Replace with your MySQL password  
    database: 'nodedb'
});


connection.connect (function(error){

var sql ='create table customers(id int auto_increment primary key,name varchar(20), email varchar(200))'
 connection.query(sql, function(err, result){
  
    if (err) console.log(err);
   console.log("table  is created") 

})

})

/*
to make this work you need to have mysql2 installed
also the server name is root and password is sally

*/