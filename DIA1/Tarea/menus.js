// menus.js
import { Router } from "express";
const router = Router();

// Aquí podrías devolver el menú como JSON
router.get("/", (req, res) => {
  res.json([
    { opcion: 1, descripcion: "Gestionar coordinadores" },
    { opcion: 2, descripcion: "Ver reportes" },
    { opcion: 3, descripcion: "Salir" }
  ]);
});

export default router;
