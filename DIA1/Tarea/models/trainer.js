const mongoose = require ('mongoose');
const trainerSchema = new mongoose.Schema({
  numeroIdentificacion: Number,
  nombre: String,
  apellidos: String,
  horarios: String,
  telefono: Number,
  rol: String,
  grupo: String,
  ruta: String
});

module.exports = mongoose.model("Trainer", trainerSchema);