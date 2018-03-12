var express = require('express');
var router_merchant = express.Router();
var Merchant = require('../controller/Merchant');
router_merchant.get('/:id?',function(req,res,next){
    if(req.params.id){
        Merchant.getMerchantById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Merchant.getAllMerchant(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router_merchant.post('/',function(req,res,next){
    Merchant.addMerchant(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router_merchant.delete('/:id',function(req,res,next){
    Merchant.deleteMerchant(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router_merchant.put('/:id',function(req,res,next){
    Merchant.updateMerchant(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
// Check login.
// router_merchant.get('/login', function(req,res,next){
//     console.log("req.body:"+ req.body);
//     Merchant.getcheckLogin(req.body,function(err,rows){
//         if(err){
//             res.json(err);
//         } else{
//             res.json(rows);
//         }
//     });
// });
module.exports=router_merchant;