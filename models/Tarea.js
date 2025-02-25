const mongoose = require("mongoose");;//esta cosa sirve para definir que se trata de un esquema tipo mongo

const TareaSchema =new mongoose.Schema({
    tarea:{
        type:String,                            //eh aqui la estructura de un esquema el nombre del campo seguido de su descripcion
        required:true                           //tambien sele puede puner unique para que el valor no se repita dentro de la BD
    },
    // estado:{
    //     type:Boolean,                            
    //     required:true
    // }
    imagen:{
        type:String,
        required:false
    },
    fecha_tarea:{
        type:Date,
        required:true
    }

})

const Tarea = mongoose.model("Tarea",TareaSchema)  //aqui ya solo lo definomos y preparamos para exportar la informacion que 
                                                        //contiene el esquema 