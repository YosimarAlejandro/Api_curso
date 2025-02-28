const express=require("express");
const router=express.Router();
const Tarea=require("../models/Tarea")

//obtener todas las tareas
router.get("/", async (req,res)=>{
 try{
    const allTarea= await Tarea.find()
    res.json(allTarea)
 }catch(error){
    res.status(500).json({error:"No se pudieron obtener las tareas"})
 }
});

//crear una nueva tarea
router.post("/", async (req,res)=>{
    try{
        const newTarea= new Tarea(req.body);
        await newTarea.save();
        res.status(200).json(newTarea)
    }catch(error){
        res.status(500).json({error:"no se guardo la nueva tarea"})
    }
});

//

module.exports=router;