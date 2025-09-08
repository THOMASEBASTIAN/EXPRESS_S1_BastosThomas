// reports.js
import { Router } from "express";
const router = Router();

// Datos simulados (mock)
const campers = [
  { ide: 1, Nombre: "Juan", Apellidos: "Pérez", Ruta: "Node.js", Estado: "Activo", Riesgo: "Alto" },
  { ide: 2, Nombre: "María", Apellidos: "García", Ruta: "JavaScript", Estado: "Activo", Riesgo: "Bajo" },
  { ide: 3, Nombre: "Luis", Apellidos: "Ramírez", Ruta: "Python", Estado: "Inactivo", Riesgo: "Alto" }
];

// 📊 Reporte general (todos los campers)
router.get("/general", (req, res) => {
  res.json({
    message: "Reporte general de campers",
    total: campers.length,
    data: campers
  });
});

// 🔎 Reporte por ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const camper = campers.find(c => String(c.ide) === id);
  if (!camper) return res.status(404).json({ error: "Camper no encontrado" });
  res.json({ message: `Reporte del camper ${id}`, data: camper });
});

// ⚠️ Reporte de riesgo alto
router.get("/risk/high", (req, res) => {
  const highRisk = campers.filter(c => c.Riesgo === "Alto");
  res.json({
    message: "Campers con riesgo alto",
    total: highRisk.length,
    data: highRisk
  });
});

export default router;
