const express = require("express");
const router = express.Router();

const trainerController = require("../controllers/trainerController");
const camperController = require("../controllers/camperControllers");

router.get("/trainers", trainerController.getAllTrainers);
router.get("/trainers/:id", trainerController.getTrainerById);
router.post("/trainers", trainerController.createTrainer);
router.put("/trainers/:id", trainerController.updateTrainer);
router.delete("/trainers/:id", trainerController.deleteTrainer);

router.get("/campers", camperController.getAllCampers);
router.get("/campers/:id", camperController.getCampersByid);
router.post("/campers", camperController.createCamper);
router.put("/campers/:id", camperController.updateCamper);
router.delete("/campers/:id", camperController.deleteCamper);


module.exports = router;
