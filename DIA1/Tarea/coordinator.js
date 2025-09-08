import { Router } from "express";
const router = Router();

const coordinator =[];



// Crear
router.post("/", (req,res)=> {
    const {id, nombre, email} =req.body;
    if (!id || !nombre || !email){
        return res.status(400).json({error: "Faltan campos: id,nombre,email"});
    }
    if (coordinators.find(c => c.id === id)){
        return res.status(409).json({error: "Coordinador con ese id ya existe"});
    }
    const nuevo ={id, nombre,email};
    coordinators.push(nuevo);
    res.status(201).json({ message: "Coordinador  Creado", data: nuevo})
});
// Listar
router.get("/", (req,res)=>{
    res.json(coordinators);
});

//Editar
router.put("/:id", (req,res)=>{
    const { id } =req.params;
    const idex = coordinators.findIndex(c => c.id === id);
    if (idx === -1) return res.status(404).json({error: "No encontrado"});
    const { nombre, email } =req.body
    if (nombre) coordinator[idx].nombre =nombre;
    if (email) coordinators[idx].email = email;

    res.json ({ message :`Coordinador ${id} actualizado`,data: coordinators[idx]});
    
});
// Eliminar 
router.delete("/:id", (req,res)=>{
    const { id }= req.params
    const idx = coordinators.findIndex(c => c.id === id);
    if (idx === -1) return res.status(404).json({error: "No encontrado"});

    const deleted = coordinators.splice(idx,1)[0];
    res.json ({ message:`Coordinador ${id} eliminado`, data : deleted });
    
});
export default router;




