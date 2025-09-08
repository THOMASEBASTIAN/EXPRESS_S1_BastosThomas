import express from "express";
import coordinatorRoutes from "./coordinator.js";
import menuRoutes from "./menus.js";
import reportRoutes from "./reports.js";

const app = express();
const PORT = 3000;
// Aca son las rutas :)
app.use(express.json());
app.use("./api/menus", menuRoutes)
app.use("/api/reports", reportRoutes)
app.use("/api/coordinators", coordinatorRoutes)



app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT} `)
});