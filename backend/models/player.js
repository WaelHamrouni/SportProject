// import mongoose module
const mongoose = require('mongoose');
// create match module
const playerSchema= mongoose.Schema({
    // attr : type
    name: String,
    number: Number,
    position:String,
    age:Number ,
    tId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }
});
//  affect model name to Schema 
const player = mongoose.model("Player",playerSchema);
//  make match importable
module.exports = player;