var express = require('express');
var router_userwallet = express.Router();
var UserWallet = require('../controller/UserWallet');
router_userwallet.get('/:id?',function(req,res,next){
    if(req.params.id){
        UserWallet.getUserWalletById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        UserWallet.getAllUserWallet(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router_userwallet.post('/',function(req,res,next){
    UserWallet.addUserWallet(req.body,function(err,count){
        console.log(err);
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router_userwallet.delete('/:id',function(req,res,next){
    UserWallet.deleteUserWallet(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router_userwallet.put('/:id',function(req,res,next){
    UserWallet.updateUserWallet(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
module.exports=router_userwallet;