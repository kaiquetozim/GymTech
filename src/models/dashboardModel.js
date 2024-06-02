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

function consultarQuantidadeMatriculaPorPlano() {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function  consultarMatriculaPorAnoAgrupadoPorMes()")

    var instrucaoSql = `
        SELECT count(matricula.id) as quantidade, nome
        FROM matricula
        AS matricula JOIN plano AS plano ON fk_plano = plano.id GROUP BY plano.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

function consultarTotalArrecadadosPorAno() {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function  consultarMatriculaPorAnoAgrupadoPorMes()")

    var instrucaoSql = `
        SELECT sum(plano.preco) AS valor
        FROM matricula
        AS matricula JOIN plano AS plano ON fk_plano = plano.id
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


module.exports = {
    consultarMatriculaPorAnoAgrupadoPorMes,
    consultarQuantidadeMatriculaPorPlano,
    consultarTotalArrecadadosPorAno

};
