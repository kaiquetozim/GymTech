var dashboardModel = require("../models/dashboardModel");

function consultarMatriculaPorAnoAgrupadoPorMes(req, res) {

    dashboardModel.consultarMatriculaPorAnoAgrupadoPorMes()
        .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length > 0) {
                        console.log(resultado);
                        res.status(200).json(resultado);
                    }
                    else {
                        res.status(403).send("Não há dados para a consulta");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar a consulta !Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );

}



function consultarQuantidadeMatriculaPorPlano(req, res) {

    dashboardModel.consultarQuantidadeMatriculaPorPlano()
        .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length > 0) {
                        console.log(resultado);
                        res.status(200).json(resultado);
                    }
                    else {
                        res.status(403).send("Não há dados para a consulta");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar a consulta !Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );

}

function consultarTotalArrecadadosPorAno(req, res) {

    dashboardModel.consultarTotalArrecadadosPorAno()
        .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length > 0) {
                        console.log(resultado);
                        res.status(200).json(resultado);
                    }
                    else {
                        res.status(403).send("Não há dados para a consulta");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar a consulta !Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );

}



module.exports = {
    consultarMatriculaPorAnoAgrupadoPorMes,
    consultarQuantidadeMatriculaPorPlano,
    consultarTotalArrecadadosPorAno
}