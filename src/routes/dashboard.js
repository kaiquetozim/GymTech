var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/consultarMatriculaPorAnoAgrupadoPorMes", function (req, res) {
    dashboardController.consultarMatriculaPorAnoAgrupadoPorMes(req, res);
});

router.get("/consultarQuantidadeMatriculaPorPlano", function (req, res) {
    dashboardController.consultarQuantidadeMatriculaPorPlano(req, res);
});

router.get("/consultarTotalArrecadadosPorAno", function (req, res) {
    dashboardController.consultarTotalArrecadadosPorAno(req, res);
});


module.exports = router;