const mongoose = require("mongoose");
const ProgresoSchema =new mongoose.Schema({
    porcentaje:{
        type:Number,
        required:true
    },
    fecha_progreso:{
        type:Date,
        required:true
    }
})
const Progreso = mongoose.model("Progreso", ProgresoSchema)