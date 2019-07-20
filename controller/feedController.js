const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const feedSchema = require('../model/feedModel');
const userBranchSchema = require ('../model/announcementModel')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/feedback');

router.post('/createPost',(req,res,next) => {

    var newPost = new feedSchema(req.body);

    newPost.save(function(err,rows){

        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({

                status:"success",
                data: rows

            })
        }
    })

});




router.post('/find',(req,res,next) =>{
    



    feedSchema.find(function(err,rows){

        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({

                status:"success",
                data: rows

            })
        }

    })
})
module.exports = router;