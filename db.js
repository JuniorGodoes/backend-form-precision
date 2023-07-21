const mysql = require('mysql2');

// Configurações do banco de dados
const connection = mysql.createConnection({
  host: 'oxy02.oxynet.com.br',
  user: 'assessor_juniorgodoes',
  password: 'Junior1574.',
  database: 'assessor_form-precision',
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL!');
});

module.exports = connection;
