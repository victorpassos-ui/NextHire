import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sistema_empregos'
});

db.connect((err) => {
  if (err) {
    console.log('Erro ao conectar:', err);
  } else {
    console.log('MySQL conectado!');
  }
});

app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

app.get('/vagas', (req, res) => {

  const sql = `
    SELECT 
      vagas.id_vaga,
      vagas.titulo_vaga,
      vagas.descricao,
      vagas.salario,
      empresas.nome_fantasia
    FROM vagas
    JOIN empresas
      ON vagas.id_empresa = empresas.id_empresa
  `;

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
      res.status(500).send(err);

    } else {

      res.json(result);

    }

  });

});

app.post('/cadastro', (req, res) => {

  const {
    nome_completo,
    cpf,
    email,
    telefone,
    senha
  } = req.body;

  const sql = `
    INSERT INTO candidatos
    (nome_completo, cpf, email, telefone, senha)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [nome_completo, cpf, email, telefone, senha],
    (err, result) => {

      if (err) {
        console.log(err);
        res.status(500).send(err);

      } else {

        res.json({
          mensagem: 'Cadastro realizado com sucesso!'
        });

      }

    }
  );

});

app.post('/login', (req, res) => {

  const { email, senha } = req.body;

  const sql = `
    SELECT * FROM candidatos
    WHERE email = ? AND senha = ?
  `;

  db.query(sql, [email, senha], (err, result) => {

    if (err) {

      console.log(err);
      res.status(500).send(err);

    } else {

      if (result.length > 0) {

        res.json({
          sucesso: true,
          mensagem: 'Login realizado!'
        });

      } else {

        res.json({
          sucesso: false,
          mensagem: 'Email ou senha inválidos'
        });

      }

    }

  });

});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});