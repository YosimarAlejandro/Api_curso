const mongoose = require("mongoose");

// Modelo de Grado
const GradoSchema = new mongoose.Schema({

    grado: {
        type: String,
        required: true
    }
});

const Grado = mongoose.model("Grado", GradoSchema);