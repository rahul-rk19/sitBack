const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const announcementSchema = require ('../model/announcementModel')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/feedback');

router.post('/createAnn',(req,res,next) => {

    var newAnn = new announcementSchema(req.body);

    newAnn.save(function(err,rows){

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




router.get('/findAnn',(req,res,next) =>{
    

    var branch = new announcementSchema(req.body);


    announcementSchema.find(function(err,rows){

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