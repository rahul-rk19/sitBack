const mongoose = require('mongoose');
const feedSchema= mongoose.Schema({
   feedsub : {type:String, require:true},
   feedtext :{type:String, require:true},
   feedbranch:{type:String, require:true},
   feedate :{type:Date, default: new Date()}
});
module.exports = mongoose.model("feeds",feedSchema);