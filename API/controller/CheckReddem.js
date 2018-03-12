var db = require('../mySQLConnection');
// Table CheckReddem
var CheckReddem={
	// Get All
	getAllCheckReddem:function(callback){
		return db.query("select * from checkreedem",callback);
	},
	// Get by ID
	getCheckReddemById:function(id,callback){
		return db.query("select * from checkreedem where CheckReedemId=?",[id],callback);
	},
	// Add 1 record
	addCheckReddem:function(checkreedem,callback){
		return db.query("insert into checkreedem(CheckReedemId,UserMerchantId,ReedemId) values(?,?,?)",[checkreedem.CheckReedemId,checkreedem.UserMerchantId,checkreedem.ReedemId],callback);
	},
	// Delete by ID
	deleteCheckReddem:function(id,callback){
		return db.query("delete from checkreedem where CheckReedemId=?",[id],callback);
	},
	// Update by ID
	updateCheckReddem:function(id,checkreedem,callback){
		return db.query("update checkreedem set UserMerchantId=?,ReedemId=? where CheckReedemId=?",[checkreedem.UserMerchantId,checkreedem.ReedemId,id],callback);
	}
};
 module.exports=CheckReddem;