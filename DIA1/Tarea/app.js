// app.js
import express from "express";
import coordinatorRoutes from "./coordinator.js";
import menuRoutes from "./menus.js";
import reportRoutes from "./reports.js";

const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Montar rutas
app.use("/api/coordinators", coordinatorRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/reports", reportRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando ");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
