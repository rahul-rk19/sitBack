const mongoose = require('mongoose');
const userSchema= mongoose.Schema({
    name: {type:String,require:true},
    usn : {type:String,require:true,unique:true},
    password: {type:String,require:true},
    userbranch:{type:String,require:true},
    usertype: {type: String,require:true},
    createOn :{type:Date, default: new Date()}
});
module.exports = mongoose.model("users",userSchema);