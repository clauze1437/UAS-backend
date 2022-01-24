// import express serta membuat router
const express = require("express");
const router = express.Router();

// import patient controller
const PatientsController = require("../controllers/PatientsController");
const PatientsValidator = require("../controllers/validator/PatientsValidator");

// membuat route default
router.get("/", (req, res) => {
  res.send("Hello Everyone");
});

// membuat routing untuk patient
router.get("/patients", PatientsController.index);
router.post("/patients", PatientsValidator, PatientsController.store);
router.put("/patients/:id", PatientsController.update);
router.delete("/patients/:id", PatientsController.destroy);
router.get("/patients/:id", PatientsController.show);
router.get("/patients/status/recovered", PatientsController.recovered);
router.get("/patients/status/positive", PatientsController.positive);
router.get("/patients/status/dead", PatientsController.dead);
router.get("/patients/search/:name", PatientsController.search);

// Export router
module.exports = router;
