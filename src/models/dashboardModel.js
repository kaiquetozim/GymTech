var database = require("../database/config")

function consultarMatriculaPorAnoAgrupadoPorMes() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function  consultarMatriculaPorAnoAgrupadoPorMes()")
    var ano = new Date().getFullYear();
    var instrucaoSql = `
        SELECT count(id) as quantidade, mes
        FROM matricula
        WHERE ano = '${ano}' GROUP BY mes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    consultarMatriculaPorAnoAgrupadoPorMes
};