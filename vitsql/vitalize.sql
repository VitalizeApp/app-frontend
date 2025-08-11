
CREATE DATABASE vitalize;

USE vitalize;

CREATE TABLE usuario(
id SERIAL,
nome VARCHAR(70) NOT NULL,
cpf INT(11) NOT NULL,
email VARCHAR(100),
nascimento DATE,
senha_hash VARCHAR(255),
tipo_usuario ENUM ('Cidadão', 'Admin'),
Criado_em DATE
);

CREATE TABLE lembretes(
id SERIAL,
id_usuario BIGINT UNSIGNED NOT NULL,
titulo VARCHAR(40) NOT NULL,
descricao VARCHAR(120),
data_lembrete DATE,
hora_lembrete TIME,
criado_em DATE,
CONSTRAINT fk_do_usuario
FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE documentos(
id SERIAL,
id_usuario INT NOT NULL,
tipo ENUM ('Exame', 'Vacina', 'Atestado'),
titulo VARCHAR(40),
url TEXT,
criado_em DATE,
atualizado_em DATE
);

CREATE TABLE historico(
id SERIAL,
id_usuario INT NOT NULL,
id_hospital INT NOT NULL,
titulo VARCHAR(40),
data_proced DATE,
url_documento TEXT
);

CREATE TABLE hospital(
id SERIAL,
nome VARCHAR(70),
endereco VARCHAR(150),
tipo ENUM ('Clínica', 'Hospital', 'Consultório'),
publico BOOLEAN
);

CREATE TABLE configuracoes(
id INT (1),
id_usuario BIGINT UNSIGNED NOT NULL,
notif ENUM ('Tudo', 'Sistema', 'Lembretes', 'Urgente'),
idioma ENUM ('EN', 'PT'),
tema ENUM ('Escuro', 'Claro'),
PRIMARY KEY (id_usuario, id),
FOREIGN KEY (id_usuario) REFERENCES usuario(id) 
);

CREATE TABLE dependente(
id_usuario BIGINT UNSIGNED NOT NULL,
id_dependente BIGINT UNSIGNED NOT NULL,
PRIMARY KEY (id_usuario, id_dependente),
FOREIGN KEY (id_usuario) REFERENCES usuario(id),
FOREIGN KEY (id_dependente) REFERENCES usuario(id)
);

