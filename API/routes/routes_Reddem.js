var express = require('express');
var router_reddem = express.Router();
var Reddem = require('../controller/Reddem');
router_reddem.get('/:id?',function(req,res,next){
    if(req.params.id){
        Reddem.getReddemById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        Reddem.getAllReddem(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router_reddem.post('/',function(req,res,next){
    Reddem.addReddem(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router_reddem.delete('/:id',function(req,res,next){
    Reddem.deleteReddem(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router_reddem.put('/:id',function(req,res,next){
    Reddem.updateReddem(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
module.exports=router_reddem;