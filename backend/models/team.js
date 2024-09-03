// import mongoose module

const mongoose = require('mongoose');
// create match module
const teamSchema = mongoose.Schema({
    // attr : type
    name: String,
    owner: String,
    foundation:Number,
    players:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }]
});
//  affect model name to Schema 
const team = mongoose.model("Team",teamSchema);
//  make match importable
module.exports = team;