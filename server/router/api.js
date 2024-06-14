const express = require("express");
const router = new express.Router();

const TravelController = require("../controller/TravelController");

router.get("/country/:country", TravelController.GetPlansByCountry);
router.get("/all", TravelController.GetAllPlans);

module.exports = router;