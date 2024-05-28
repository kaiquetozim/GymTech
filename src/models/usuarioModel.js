var database = require("../database/config")

function autenticar( email, cpf) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, cpf)
    var instrucaoSql = `
        SELECT email, cpf 
        FROM cadastro
        WHERE email = '${email}' AND cpf = '${cpf}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function matricular(nome, email, cpf, atividade, whatsapp) {
    console.log( nome, email, cpf, atividade, whatsapp);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO cadastro (nome, email, cpf, atividade, whatsapp) VALUES ('${nome}', '${email}', '${cpf}', '${atividade}', ${whatsapp});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    matricular
};