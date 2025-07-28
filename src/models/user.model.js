const  mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

module.exports = mongoose.model("User",userScheme);