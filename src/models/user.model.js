const  mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
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