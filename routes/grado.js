const express= require("express");
const router= express.Router();
const Grado= require("../models/Grado")

//obtener todos los grados
router.get("/", async (req, res)=>{
    try{
        const allGrades= await Grado.find();
        res.json(allGrades)

    }catch(error){
        res.status(500).json({error:"No se obtuvieron los resultados de la tabla de grados"})
    }
});

//crear nuevo grado




module.exports =router;