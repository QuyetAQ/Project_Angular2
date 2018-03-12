var express = require('express');
var router_checkreddem = express.Router();
var CheckReddem = require('../controller/CheckReddem');
router_checkreddem.get('/:id?',function(req,res,next){
    if(req.params.id){
        CheckReddem.getCheckReddemById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        CheckReddem.getAllCheckReddem(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router_checkreddem.post('/',function(req,res,next){
    CheckReddem.addCheckReddem(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router_checkreddem.delete('/:id',function(req,res,next){
    CheckReddem.deleteCheckReddem(req.params.id,function(err,count){
        if(err){
            res.json(err);
        } else{
          res.json(count);
        }
    });
});

router_checkreddem.put('/:id',function(req,res,next){
    CheckReddem.updateCheckReddem(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});
module.exports=router_checkreddem;