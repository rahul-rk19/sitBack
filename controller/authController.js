const express = require('express');
const userSchema = require('../model/userModel');
const bodyParser = require('body-parser');
const bcrypt =require('bcrypt');
const saltRounds=10;

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/feedback');

router.post('/signup',(req,res,next) =>{
    var hash =bcrypt.hashSync(req.body.password,saltRounds)

    var userJson={
        name:req.body.name,
        usn:req.body.usn,
        password:hash,
        userbranch:req.body.userbranch,
        usertype:req.body.usertype
     
    }
        var users=new userSchema(userJson);

    console.log(users);
    users.save(function(err,result){
        console.log('result');

        if(err){
            res.status(500).json(err);
        }else{
            res.status(200).json({
                status:"success",
                data:result
            })
        }
    })
});
router.post('/login',(req,res,next) => {

    userSchema.findOne({usn:req.body.usn},function(err,result){
        if(err){
            res.status(500).json(err);

        }else if(result != null) {
            if(bcrypt.compareSync(req.body.password,result["password"])){
                res.status(200).json({
                    status:"success",
                    data:result
                })

            }else{

                res.status(200).json({
                    status:"failure",
                    data:null
                })

            }
        }
        

    })

  
});
router.get('/',(req,res,next)=>{
    res.status(200).json("auth");
})
module.exports =router;