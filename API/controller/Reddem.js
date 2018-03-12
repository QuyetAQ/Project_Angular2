var db = require('../mySQLConnection');
// Table Reddem
var Reddem={
	// Get All
	getAllReddem:function(callback){
		return db.query("select * from reddem",callback);
	},
	// Get by ID
	getReddemById:function(id,callback){
		return db.query("select * from reddem where ReddemId=?",[id],callback);
	},
	// Add 1 record
	addReddem:function(reddem,callback){
		return db.query("insert into reddem(ReddemId,MerchantId,balanceCoin) values(?,?,?)",[reddem.ReddemId,reddem.MerchantId,reddem.balanceCoin],callback);
	},
	// Delete by ID
	deleteReddem:function(id,callback){
		return db.query("delete from reddem where ReddemId=?",[id],callback);
	},
	// Update by ID
	updateReddem:function(id,reddem,callback){
		return db.query("update reddem set MerchantId=?,balanceCoin=? where ReddemId=?",[reddem.MerchantId,reddem.balanceCoin,id],callback);
	}
};
 module.exports=Reddem;