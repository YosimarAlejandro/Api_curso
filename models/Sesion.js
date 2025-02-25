const mongoose=require("mongoose");
const SesionSchema= new mongoose.model({
    estado:{
        type:Boolean,
        default:true
    },
    fecha_sesion:{
        type:Date,
        default:Date.now
    }
})