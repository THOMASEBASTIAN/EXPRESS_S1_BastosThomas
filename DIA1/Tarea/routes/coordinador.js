const express = require("express");
const router = express.Router();

const trainerController = require("../controllers/trainerController");
const camperController = require("../controllers/camperControllers");

router.get("/trainers", trainerController.getAllTrainers);
router.get("/trainers", trainerController.getTrainerById);
router.get("/trainers", trainerController.createTrainer);
router.get("/trainers", trainerController.updateTrainer);
router.get("/trainers", trainerController.deleteTrainer);

router.get("/campers", camperController.getAllCampers);
router.get("/campers", camperController.getCampersByid);
router.get("/campers", camperController.createCamper);
router.get("/campers", camperController.updateCamper);
router.get("/campers", camperController.deleteCamper);



module.exports = router;
