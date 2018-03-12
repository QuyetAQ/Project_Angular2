var db = require('../mySQLConnection');
// Table Merchant
var Merchant={
	// Get All
	getAllMerchant:function(callback){
		return db.query("select * from merchant",callback);
	},
	// Get by ID
	getMerchantById:function(id,callback){
		return db.query("select * from merchant where MerchantId=?",[id],callback);
	},
	// Add 1 record
	addMerchant:function(merchant,callback){
		return db.query("insert into merchant(MerchantId,MerchantName,UserName,Password,CoinName,isAdmin,Address,TaxId,LoyaltyProgramName,Logo,JoinDate,Group,AuthenticationApi,GetLoyaltyApi,GetGiftListApi,UpdateBlalaceApi,ReddeemGiftApi,QrCode) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[merchant.MerchantId,merchant.MerchantName,merchant.UserName,merchant.Password,merchant.CoinName,merchant.isAdmin,merchant.Address,merchant.TaxId,merchant.LoyaltyProgramName,merchant.Logo,merchant.JoinDate,merchant.Group,merchant.AuthenticationApi,merchant.GetLoyaltyApi,merchant.GetGiftListApi,merchant.UpdateBlalaceApi,merchant.ReddeemGiftApi,merchant.QrCode],callback);
	},
	// Delete by ID
	deleteMerchant:function(id,callback){
		return db.query("delete from merchant where MerchantId=?",[id],callback);
	},
	// Update by ID
	updateMerchant:function(id,merchant,callback){
		return db.query("update merchant set MerchantName=?,UserName=?,Password=?,CoinName=?,isAdmin=?,Address=?,TaxId=?,LoyaltyProgramName=?,Logo=?,JoinDate=?,Group=?,AuthenticationApi=?,GetLoyaltyApi=?,GetGiftListApi=?,UpdateBlalaceApi=?,ReddeemGiftApi=?,QrCode=?",[merchant.MerchantName,merchant.UserName,merchant.Password,merchant.CoinName,merchant.isAdmin,merchant.Address,merchant.TaxId,merchant.LoyaltyProgramName,merchant.Logo,merchant.JoinDate,merchant.Group,merchant.AuthenticationApi,merchant.GetLoyaltyApi,merchant.GetGiftListApi,merchant.UpdateBlalaceApi,merchant.ReddeemGiftApi,merchant.QrCode,id],callback);
	},
	// CheckLogin
    getcheckLogin:function(merchant,callback){
        return db.query("select UserName,Password,isAdmin from merchant where UserName=? and Password=? and isAdmin=?",[merchant.username,merchant.password,merchant.isadmin],callback);
	}
};
 module.exports=Merchant;