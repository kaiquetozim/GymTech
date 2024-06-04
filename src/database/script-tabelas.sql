-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
CREATE DATABASE gymBody;

USE gymBody;

CREATE TABLE Cliente(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(256) UNIQUE,
cpf CHAR(11),
whatsapp CHAR(11)
);

CREATE TABLE plano(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(10),
preco DECIMAL(15.2)
);


CREATE TABLE matricula(
id INT PRIMARY KEY AUTO_INCREMENT,
mes INT,
ano INT,
fk_cliente INT,
fk_plano INT,
FOREIGN KEY (fk_cliente) REFERENCES Cliente(id),
FOREIGN KEY (fk_plano) REFERENCES plano(id)
);

CREATE TABLE administrador(
id INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(256) UNIQUE,
senha VARCHAR(20)
);

INSERT INTO Cliente VALUES
	(default, 'Jurandiro', 'jurandiro@gmail.com', '12345678910', '11982492957'),
	(default, 'Marconildo', 'marconildo@gmail.com', '12345678911', '11982492951'),
	(default, 'Aronilda', 'aronildo@gmail.com', '12345678912', '11982492952'),
	(default, 'Closdovalda', 'closdovalda@gmail.com', '12345678913', '11982492953'),
	(default, 'Jiane', 'jiane@gmail.com', '12345678914', '11982492954'),
	(default, 'Jhon Lin', 'jhonlin@gmail.com', '12345678915', '11982492955'),
	(default, 'Raniely', 'raniely@gmail.com', '12345678916', '11982492956'),
    (default, 'Marcieli', 'marciele@gmail.com', '12345678917', '11982492958'),
    (default, 'Ranivaldo', 'ranivaldo@gmail.com', '12345678918', '11982492959');
    
    
INSERT INTO plano VALUES
	(DEFAULT, 'Black', 150.00),
	(DEFAULT, 'Gold', 110.00),
	(DEFAULT, 'Silver', 85.00),
	(DEFAULT, 'Bronze', 65.00);
    
INSERT INTO matricula VALUES	
	(default, 1, 2024, 1, 1),
	(default, 2, 2024, 2, 2),
	(default, 3, 2024, 3, 3),
	(default, 4, 2024, 4, 4),
	(default, 5, 2024, 5, 1),
	(default, 6, 2024, 6, 2),
	(default, 4, 2024, 7, 2),
	(default, 1, 2024, 8, 3),
	(default, 2, 2024, 9, 3);

    
-- INSERINDO ADMINISTRADOR DA GYMBODY
INSERT INTO administrador VALUES
	(default, 'kaique@gmail.com', 'sotero0610');
    
-- TOTAL DE MATRICULAS NO MES DO ANO ATUAL
SELECT count(id), mes FROM matricula WHERE ano = 2024 GROUP BY mes;

-- DASHBOARD MATRICULA POR PLANO
SELECT count(matricula.id), nome FROM matricula AS matricula JOIN plano AS plano ON fk_plano = plano.id GROUP BY plano.id;

-- ARRECADAÇÃO NO ANO ATUAL
SELECT SUM(plano.preco) AS valor FROM matricula AS matricula JOIN plano AS plano ON fk_plano = plano.id
	WHERE ano = 2024;
    
SELECT * FROM Cliente;
SELECT * FROM matricula ORDER BY fk_plano;
SELECT * FROM administrador;

DELETE FROM plano WHERE id > 4;
    
 
   