const express = require("express");
const User = require("../models/User")
const router =express.Router();
//obtener todos los usuarios 
router.get("/", async (req, res) => {
        try {
          const user = await User.find();
          res.json(user);
        } catch (error) {
          res.status(500).json({ error: "Error al obtener los grados" });
        }
 });
//crear un nuevo usuario
router.post("/",async(req,res)=>{
    try{
        const nuevoUser = new User(req.body)
        await nuevoUser.save();
        res.status(200).json(nuevoUser)
    }catch(error){
        res.status(500).json({error:"No se crreo el usuario"})
    }
});

//Actualizar usuario
router.put("/:id", async (req, res) => {
    try{
        const {name,code} =req.body;
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {name,code},
            {new:true}
        );

        if (!updateUser) {return res.status(500).json({error:"Nose encontro el ususario"})}
        res.json(updateUser)
    }catch(error){
        res.status(500).json({error:"Nose pudo actualizar la informacion del usuario"})
    }
});

//Este es de eliminar usuario
router.delete("/:id", async (req,res)=>{
    try{
        const deleteUser=await User.findByIdAndDelete(req.params.id)
        if(!deleteUser) {return res.status(500).json({error:"no se encontro el ususario"})}
        res.status(200).json({ message: "Usuario eliminado correctamente", usuario: deleteUser });
    }catch(error){
        res.status(500).json({error:"No se pudo eliminar el usuario"})
    }
});


 module.exports=router;