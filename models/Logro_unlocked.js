const mongoose = require("mongoose");

const LogrodesSchema = new mongoose.Schema({
    fecha:{
        type:Date,
        default:Date.now
    }
})

const  Logrodes = mongoose.model("Logrodes",LogrodesSchema)