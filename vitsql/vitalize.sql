
CREATE DATABASE vitalize;

USE vitalize;

CREATE TABLE usuario(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(70) NOT NULL,
cpf CHAR(11) NOT NULL UNIQUE,
email VARCHAR(100),
telefone VARCHAR(20),
nascimento DATE,
senha_hash VARCHAR(255),
tipo_usuario ENUM ('Cidadão', 'Admin'),
criado_em DATE
);

CREATE TABLE lembretes(
id INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT NOT NULL,
titulo VARCHAR(40) NOT NULL,
descricao VARCHAR(120),
data_lembrete DATE,
hora_lembrete TIME,
criado_em DATE,
CONSTRAINT fk_do_usuario
FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE documentos(
id INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT NOT NULL,
tipo ENUM ('Exame', 'Vacina', 'Atestado'),
titulo VARCHAR(40),
url TEXT,
criado_em DATE,
atualizado_em DATE,
CONSTRAINT fk_do_usuario
FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE historico(
id INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT NOT NULL,
id_hospital INT NOT NULL,
titulo VARCHAR(40),
data_proced DATE,
url_documento TEXT,
CONSTRAINT fk_do_usuario
FOREIGN KEY (id_usuario) REFERENCES usuario(id),
CONSTRAINT fk_do_hospital
FOREIGN KEY (id_hospital) REFERENCES hospital(id)
);

CREATE TABLE hospital(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(70),
endereco VARCHAR(150),
tipo ENUM ('Clínica', 'Hospital', 'Consultório'),
publico BOOLEAN
);

CREATE TABLE configuracoes(
id INT (1),
id_usuario INT NOT NULL,
notif ENUM ('Tudo', 'Sistema', 'Lembretes', 'Urgente'),
idioma ENUM ('EN', 'PT'),
tema ENUM ('Escuro', 'Claro'),
PRIMARY KEY (id_usuario, id),
FOREIGN KEY (id_usuario) REFERENCES usuario(id) 
);

CREATE TABLE dependente(
id_usuario INT NOT NULL,
id_dependente INT NOT NULL,
PRIMARY KEY (id_usuario, id_dependente),
FOREIGN KEY (id_usuario) REFERENCES usuario(id),
FOREIGN KEY (id_dependente) REFERENCES usuario(id)
);

