import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3230;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
/*app.use(bodyParser.urlencoded({ extended: true}));*/
/*Ambas possuem o mesmo uso, junta o pacote na url*/
app.use(express.static('src'));
/*Junta tudo que esta dentro da pasta, para um enorme pacote a ser usado pelo sevidor*/

app.set('view engine', 'ejs');
app.set('views', './views');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cimatec',
  database: 'vitalize'
});

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'geral', 'telas', 'abertura', 'abertura.html'));
    /* Envia o usuario para a pagina central sem a necessidade de definir a pagina especifica */
});

app.listen(PORT, function(){
    console.log(`Servidor conectado ${PORT}`);
    /*Envia a mensagem ao iniciar o servidor*/
});
