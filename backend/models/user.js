// import mongoose module
const mongoose = require('mongoose');
// create match module
const userSchema = mongoose.Schema({
    // attr : type
    firstName:String,
    lastName:String,
    email:String,
    pwd:String,
    tel:String,
    role:String,
    avatar:String

});
//  affect model name to Schema 
const user = mongoose.model("User",userSchema);
//  make match importable
module.exports = user;