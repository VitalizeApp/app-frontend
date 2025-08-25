import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const PORT = 3230;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// MIDDLEWARE DE DEBUG - ADICIONE ISSO
app.use((req, res, next) => {
    console.log(`📍 ${new Date().toLocaleTimeString()} - ${req.method} ${req.url}`);
    next();
});

// Verificação de arquivos - ADICIONE ISSO PARA DEBUG
console.log('🔍 Verificando estrutura de arquivos...');
console.log('📁 __dirname:', __dirname);

// Verificar se os diretórios existem
const paths = [
    path.join(__dirname, 'geral'),
    path.join(__dirname, 'geral/telas'),
    path.join(__dirname, 'geral/telas/abertura'),
    path.join(__dirname, 'geral/telas/bemvindo'),
    path.join(__dirname, 'geral/telas/abertura/abertura.html'),
    path.join(__dirname, 'geral/telas/abertura/abertura.css'),
    path.join(__dirname, 'geral/telas/bemvindo/bemvindo.html'),
    path.join(__dirname, 'geral/telas/bemvindo/bemvindo.css')
];

paths.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        console.log('✅', filePath);
    } else {
        console.log('❌', filePath);
    }
});

// Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, 'Vitalizebootstrap')));
app.use(express.static(path.join(__dirname, 'docs')));
app.use(express.static(path.join(__dirname, 'geral')));

// ADICIONE esta linha para servir especificamente a pasta abertura
app.use('/abertura', express.static(path.join(__dirname, 'geral/telas/abertura')));
app.use('/bemvindo', express.static(path.join(__dirname, 'geral/telas/bemvindo')));
app.use('/termos', express.static(path.join(__dirname, 'geral/telas/termos')));
app.use('/geral', express.static(path.join(__dirname, 'geral/')));

// MIDDLEWARE PARA CAPTURAR ARQUIVOS NÃO ENCONTRADOS
app.use((req, res, next) => {
    if (req.url.endsWith('.css') || req.url.endsWith('.html') || req.url.endsWith('.js')) {
        const filePath = path.join(__dirname, 'geral', req.url);
        console.log(`🔍 Procurando arquivo: ${filePath}`);
        
        if (!fs.existsSync(filePath)) {
            console.log(`❌ Arquivo não encontrado: ${filePath}`);
        }
    }
    next();
});

app.set('view engine', 'ejs');
app.set('views', './views');

//Conexão com o BANCO DE DADOS
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cimatec',
    database: 'vitalize'
});

// ROTA PRINCIPAL
app.get('/', function (req, res){
    console.log('🏠 Acessando rota principal');
    const aberturaPath = path.join(__dirname, 'geral', 'telas', 'abertura', 'abertura.html');
    console.log('📄 Enviando arquivo:', aberturaPath);
    
    if (fs.existsSync(aberturaPath)) {
        res.sendFile(aberturaPath);
    } else {
        console.log('❌ Arquivo abertura.html não encontrado!');
        res.status(404).send('Arquivo não encontrado');
    }
});

// ROTA PARA BEMVINDO
app.get('/geral/telas/bemvindo/bemvindo.html', function (req, res){
    console.log('🎉 Acessando rota bemvindo');
    const bemvindoPath = path.join(__dirname, 'geral', 'telas', 'bemvindo', 'bemvindo.html');
    console.log('📄 Enviando arquivo:', bemvindoPath);
    
    if (fs.existsSync(bemvindoPath)) {
        res.sendFile(bemvindoPath);
    } else {
        console.log('❌ Arquivo bemvindo.html não encontrado!');
        res.status(404).send('Arquivo bemvindo.html não encontrado');
    }
});

//Função para LOGIN
app.post('/login', (req, res) => {
  const { cpf, senha } = req.body

  const query = "SELECT * FROM usuario WHERE cpf = ? LIMIT 1"
  db.query(query, [cpf], (err, results) =>{
    if (err) {
      console.error(err);
      return res.status(500).send('Erro no servidor');
    }
    if (results.length === 0) {
      return res.status(401).send('Usuário ou senha invalidos')
    }

    const usuarios = results[0];
  });
});


// CAPTURA ERROS 404
app.use((req, res) => {
    console.log(`❌ 404 - Rota não encontrada: ${req.url}`);
    res.status(404).send(`Página não encontrada: ${req.url}`);
});

app.listen(PORT, function(){
    console.log(`🚀 Servidor conectado na porta ${PORT}`);
    console.log(`🌐 Acesse: http://localhost:${PORT}`);
});