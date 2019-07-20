

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const authController = require('../controller/authController');
const feedController =require('../controller/feedController');
const announcementController = require('../controller/announcementController')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/auth',authController);
app.use('/feed',feedController);
app.use('/announcement',announcementController);

app.get('/',(req,res,next )=>{
  res.status(200).json("Hello");
})


module.exports = app;
