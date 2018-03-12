var mysql=require('mysql');
var connection=mysql.createPool({
 
host:'10.16.17.144',
port: '3306',
user:'root',
password:'1111',
database:'almdb'
 
});
module.exports=connection;