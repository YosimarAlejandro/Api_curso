const mongoose = require("mongoose");

// Modelo de Logro
const LogroSchema = new mongoose.Schema({

    logro: {
        type: String,
        required: true
    }
});

const Logro = mongoose.model("Logro", LogroSchema);