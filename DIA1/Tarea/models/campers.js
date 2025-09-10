const mongoose = require("mongoose");

const camperSchema = new mongoose.Schema({
  ide: Number,
  nombre: String,
  apellidos: String,
  acudiente: String,
  direccion: String,
  celular: Number,
  fijo: Number,
  correo: String,
  estado: String,
  riesgo: String,
  ruta: String,
  grupo: String,
  trainer: String,
  salon: String,
  fechaInicio: String,
  fechaFinalizacion: String
});

module.exports = mongoose.model("Camper", camperSchema);