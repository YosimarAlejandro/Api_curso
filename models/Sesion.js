const mongoose=require("mongoose");

// Modelo de Sesión
const SesionSchema = new mongoose.Schema({

    estado: {
        type: Boolean,
        default: true
    },
    fecha_sesion: {
        type: Date,
        default: Date.now
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Sesion = mongoose.model("Sesion", SesionSchema);