var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/consultarMatriculaPorAnoAgrupadoPorMes", function (req, res) {
    dashboardController.consultarMatriculaPorAnoAgrupadoPorMes(req, res);
});

module.exports = router;