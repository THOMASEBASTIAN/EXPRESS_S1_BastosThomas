import express from "express";
import jwt from "jsonwebtoken";
import Camper from "../models/Camper.js";
import Trainer from "../models/Trainer.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {

    let user = await Camper.findOne({ email });


    if (!user) {
      user = await Trainer.findOne({ email });
    }


    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado pailas" });
    }

   
    if (user.password !== password) {
      return res.status(401).json({ message: "Contraseña pailas" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role || "camper" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } 
    );

    return res.json({
      message: "melo",
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error en el server" });
  }
});

export default router;