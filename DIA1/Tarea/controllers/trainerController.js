const Trainer = require("../models/trainer");

exports.getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener trainers" });
  }
};
exports.getTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) return res.status(404).json({ error: "Trainer se nos fue" });
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ error: "mal ahi tenemos un error con el trainer" });
  }
};

exports.createTrainer = async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    await trainer.save();
    res.status(201).json(trainer);
  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo ser de luz (trainer)" });
  }
};


exports.updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!trainer) return res.status(404).json({ error: "Trainer se nos fue" });
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar trainer" });
  }
};

exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(req.params.id);
    if (!trainer) return res.status(404).json({ error: "Trainer se nos fue" });
    res.json({ message: "Trainer eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar trainer" });
  }
};