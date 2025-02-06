// routes.js
import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const router = express.Router();
const SECRET_KEY = 'mateuskey';

router.get('/', (req, res) => {
  res.send('Hello World!')
})

// Rota para registrar um novo usuário
router.post('/user', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    return res.status(400).json({ message: 'Usuário já existe' });
  }

  try {
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
router.delete('/user', async (req, res) => {
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
router.post('/login', async (req, res) => {
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
  const userId = user.id;

  res.json({ message: 'Login bem-sucedido!', token, userId });
});



// Rota para criar uma nova tarefa
router.post('/tasks', async (req, res) => {
  const { title, userId } = req.body;

  try {
    const task = await prisma.task.create({
      data: {
        title,
        userId,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para listar tarefas de um usuário
router.get('/users/:userId/tasks', async (req, res) => {
  const { userId } = req.params;

  try {
    const tasks = await prisma.task.findMany({
      where: { userId },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rota para deletar um usuário
router.delete('/users/:userId/tasks/:id', async (req, res) => {
    const { id } = req.params
    
    try {
        const tasks = await prisma.task.delete({
            where: { id },
        })
        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json({ error: error.message })
        
    }
})

// Rota para editar um usuário
router.put('/users/:userId/tasks/:id', async (req, res) => {
  const { id } = req.params
  const { title, completed } = req.body

  try {
    const tasks = await prisma.task.update({
      where: { id } ,
      data: { 
        title,
        completed
      }
    })
    res.status(200).json(tasks)
  } catch (error){
    res.status(400).json({ error: error.message })
  }
})

export default router;

