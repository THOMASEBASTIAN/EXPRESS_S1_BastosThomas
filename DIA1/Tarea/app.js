const express = require('express');
const mongoose = require('mongoose');
const http = require('http')
require('dotenv').config();
const app = express();
const  server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const  URI = process.env.URI;



app.use(express.json());

//Rutas
const coordinadorRoutes = require ("./routes/coordinador");
app.use("/coodinador", coordinadorRoutes)

// Esta es mi conexion 
mongoose.connect(URI)
 .then(() => {
  console.log('conectado a la bbdd ')
   app.listen(PORT, () => {
    console.log(`servidro express escuchado ${PORT}`);
   });
 })
 .catch((err) => {
   console.error('la base de datos esta mal',err);
   process.exit(1);
 })