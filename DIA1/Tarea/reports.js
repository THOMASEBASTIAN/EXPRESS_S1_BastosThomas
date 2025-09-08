import { Router } from "express";
const router = Router();

// Datos simulados (luego se reemplazan por DB o JSON real)
const campers = [
  { ide: 1, Nombre: "Juan", Apellidos: "Pérez", Ruta: "Node.js", Estado: "Activo", Riesgo: "Alto" },
  { ide: 2, Nombre: "María", Apellidos: "García", Ruta: "JavaScript", Estado: "Activo", Riesgo: "Bajo" },
  { ide: 3, Nombre: "Luis", Apellidos: "Ramírez", Ruta: "Python", Estado: "Inactivo", Riesgo: "Alto" }
];

// Endpoint: listar campers con riesgo alto
router.get("/highrisk", (req, res) => {
  const highRiskCampers = campers.filter(c => c.Riesgo === "Alto");

  if (highRiskCampers.length === 0) {
    return res.json({ message: "No se encontraron campers con riesgo alto." });
  }

  res.json({
    message: "Campers con riesgo alto",
    data: highRiskCampers
  });
});

export default router;
