import express from "express";
import mongoose from "mongoose";
import http from "http";
import fs from "fs";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";

import coordinadorRoutes from "./routes/coordinador.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;


const swaggerFile = JSON.parse(fs.readFileSync("./swagger.json", "utf-8"));


app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());

app.use("/coordinador", coordinadorRoutes);

// Conexión a MongoDB
mongoose
  .connect(URI)
  .then(() => {
    console.log("Conectado a la base de datos");
    app.listen(PORT, () => {
      console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar la base de datos", err);
    process.exit(1);
  });