const mongoose = require("mongoose");

const LogroSchema = new mongoose.Schema({
    logro:{
        type:String,
        required:true
    }
})

const Logro = mongoose.model("Logro",LogroSchema)