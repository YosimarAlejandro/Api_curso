const express= require("express");
const router = express.Router();
const Logro =require("../models/Logro")

//Obtener todos los logros
router.get("/", async (req,res)=>{
    try{
        const allLogros = await Logros.find();
        res.json(allLogros)
    }catch(error){
        res.status(500).json({error:"No se pudieron obtener los datos de la tabla de los logros"})
    }
});
//Crear un nuevo logro
router.post("/", async(req,res)=>{
    try{
        const newLogro= new Logro(req.body);
        await newLogro.save();
        res.status(200).json({message:"Logro creado con éxito"})
    }catch(error){
        res.status(500).json({error:"No se pudo crar el nuevo logro revisa el code"})
    }
})

//Actualizar logro
router.put("/:id", async (req,res)=>{
    try{
        const{logro} =req.body;
        const updateLogro = await Logro.findByIdAndUpdate(
            req.params.id,
            {logro},
            {new:true},
        )
        if(!updateLogro) {return res.status(400).json({error:"No se encontro el logro"})}
        res.status(200).json({ message: "Logro actualizado correctamente", logro: updateLogro });

    }catch(error){
        res.status(500).json({error:"No se pudo actualizar el logro"})
    }
});
// Eliminar Logro
router.delete("/:id", async (req, res) => {
    try {
        const deleteLogro = await Logro.findByIdAndDelete(req.params.id);

        if (!deleteLogro) {
            return res.status(404).json({ error: "No se encontró el ID" });
        }

        res.status(200).json({ message: "Se eliminó correctamente", logro: deleteLogro });
        
    } catch (error) {
        res.status(500).json({ error: "No se pudo eliminar el logro" });
    }
});



module.exports=router;