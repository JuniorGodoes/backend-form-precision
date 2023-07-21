const express = require('express');
const db = require('./db'); // Importe a conexão com o banco de dados que criamos
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

const corsoption = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsoption))


app.get('/', (req, res) => {
  const query = 'SELECT * FROM form';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }

    res.json(results);
  });
});

app.post('/criar_registro', (req, res) => {
  const { empresa, cnpj, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10, pergunta11, pergunta12, pergunta13, pergunta14, pergunta15, pergunta16, pergunta17, pergunta18, pergunta19, pergunta20, pergunta21 } = req.body; // Certifique-se de que os nomes dos campos correspondem aos enviados pelo cliente

  // Execute uma consulta para inserir os dados na tabela desejada (substitua "sua_tabela" pelo nome da sua tabela)
  const query = `INSERT INTO form (empresa, cnpj, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10, pergunta11, pergunta12, pergunta13, pergunta14, pergunta15, pergunta16, pergunta17, pergunta18, pergunta19, pergunta20, pergunta21) VALUES ("${empresa}", "${cnpj}", "${pergunta1}", "${pergunta2}", "${pergunta3}", "${pergunta4}", "${pergunta5}", "${pergunta6}", "${pergunta7}", "${pergunta8}", "${pergunta9}", "${pergunta10}", "${pergunta11}", "${pergunta12}", "${pergunta13}", "${pergunta14}", "${pergunta15}", "${pergunta16}", "${pergunta17}", "${pergunta18}", "${pergunta19}", "${pergunta20}", "${pergunta21}");`;

  db.query(query, [empresa, cnpj, pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10, pergunta11, pergunta12, pergunta13, pergunta14, pergunta15, pergunta16, pergunta17, pergunta18, pergunta19, pergunta20, pergunta21]
    , (err, result) => {
    if (err) {
      console.error('Erro ao inserir registro no banco de dados:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }

    res.status(201).json({ message: 'Registro criado com sucesso!', id: result.insertId });
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
