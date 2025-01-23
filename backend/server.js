import express, { json } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;
const SECRET_KEY = 'mateuskey';

// Rota para registrar um novo usuário
app.post('/user', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return res.status(400).json({ message: 'Usuário já existe' });
  }

  try {
    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    res.json(user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Algo deu errado!', details: error.message });
  }
});

// Rota para deletar um usuário
app.delete('/user', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email é necessário para deletar um usuário' });
  }

  try {
    const user = await prisma.user.delete({
      where: { email },
    });
    res.json(`${user.email} deletado`);
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    res.status(500).json({ error: 'Algo deu errado ao deletar', details: error.message });
  }
});

// Rota para login de usuário
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(404).json({ message: 'Senha incorreta' });
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ message: 'Login bem-sucedido!', token });
});

// Middleware de autenticação para proteger rotas
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

// Exemplo de rota protegida
app.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Acesso permitido' });
});



app.listen(port, () => {
  console.log(`App de exemplo está rodando na porta ${port}`);
});
