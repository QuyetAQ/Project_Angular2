var db = require('../mySQLConnection');
// Table Product
var Product={
	// Get All
	getAllProduct:function(callback){
		return db.query("select * from product",callback);
	},
	// Get by ID
	getProductById:function(id,callback){
		return db.query("select * from product where ProductId=?",[id],callback);
	},
	// Add 1 record
	addProduct:function(product,callback){
		return db.query("insert into product(ProductId,ProductName,ProductDescription,MerchantId) values(?,?,?,?)",[product.ProductId,product.ProductName,product.ProductDescription,product.MerchantId],callback);
	},
	// Delete by ID
	deleteProduct:function(id,callback){
		return db.query("delete from product where ProductId=?",[id],callback);
	},
	// Update by ID
	updateProduct:function(id,product,callback){
		return db.query("update product set ProductName=?,ProductDescription=?,MerchantId=? where ProductId=?",[product.ProductName,product.ProductDescription,product.MerchantId,id],callback);
	}
};
 module.exports=Product;