const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeControllers"); //controller

router.get("/stored/course", meController.storedCourse);

module.exports = router;
