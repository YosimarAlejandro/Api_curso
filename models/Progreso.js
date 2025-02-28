const mongoose = require("mongoose");

// Modelo de Progreso
const ProgresoSchema = new mongoose.Schema({

    porcentaje: {
        type: Number,
        required: true
    },
    fecha_progreso: {
        type: Date,
        required: true
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Progreso = mongoose.model("Progreso", ProgresoSchema);