const mongoose = require("mongoose");;//esta cosa sirve para definir que se trata de un esquema tipo mongo

// Modelo de Tarea
const TareaSchema = new mongoose.Schema({
    
    tarea: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: false
    },
    fecha_tarea: {
        type: Date,
        required: true
    },
    id_logro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Logro",
        required: false
    },
    id_progreso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Progreso",
        required: true
    }
});

const Tarea = mongoose.model("Tarea", TareaSchema);