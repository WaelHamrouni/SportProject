// import mongoose module
const mongoose = require('mongoose');
// create match module
const matchSchema= mongoose.Schema({
    // attr : type
    scoreOne: Number,
    scoreTwo: Number,
    teamOne:String,
    teamTwo:String 
});
//  affect model name to Schema 
const match = mongoose.model("Match",matchSchema);
//  make match importable
module.exports = match;