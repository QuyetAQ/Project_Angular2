var db = require('../mySQLConnection');
// Table UserWallet
var UserWallet={
	// Get All
	getAllUserWallet:function(callback){
		return db.query("select * from user_wallet",callback);
	},
	// Get by ID
	getUserWalletById:function(id,callback){
		return db.query("select * from user_wallet where UserId=?",[id],callback);
	},
	// Add 1 record
	addUserWallet:function(userwallet,callback){
		return db.query("insert into user_wallet(UserId,UserName,Password,Rank,Logo,Phone,FirstName,LastName) values(?,?,?,?,?,?,?)",[userwallet.UserId,userwallet.UserName,userwallet.Password,userwallet.Rank,userwallet.Logo,userwallet.FirstName,userwallet.LastName],callback);
	},
	// Delete by ID
	deleteUserWallet:function(id,callback){
		return db.query("delete from user_wallet where UserId=?",[id],callback);
	},
	// Update by ID
	updateUserWallet:function(id,userwallet,callback){
		return db.query("update user_wallet set UserName=?,Password=?,Rank=?,Logo=?,Phone=?,FirstName=?,LastName=? where UserId=?",[userwallet.UserName,userwallet.Password,userwallet.Rank,userwallet.Logo,userwallet.Phone,userwallet.FirstName,userwallet.LastName,id],callback);
	}
};
 module.exports=UserWallet;