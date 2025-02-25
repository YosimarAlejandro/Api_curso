const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    code:{
        type:Number,
        required:true
    }
})  
const User = mongoose.model("User", UserSchema);