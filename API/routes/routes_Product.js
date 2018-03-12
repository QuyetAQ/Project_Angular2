var express = require('express');
var router_product = express.Router();
var Product = require('../controller/Product');
router_product.get('/:id?',function(req,res,next){
    if(req.params.id){
        Product.getProductById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Product.getAllProduct(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router_product.post('/',function(req,res,next){
    Product.addProduct(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router_product.delete('/:id',function(req,res,next){
    Product.deleteProduct(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router_product.put('/:id',function(req,res,next){
    Product.updateProduct(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
module.exports=router_product;