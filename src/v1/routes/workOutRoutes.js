const express = require("express");
const apicache = require("apicache");

const workoutController = require("../../controllers/workOutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();
const cache = apicache.middleware;

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

router.get("/", cache("2 minutes"), workoutController.getAllWorkouts)

module.exports = router;
