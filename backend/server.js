import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()

const app = express()
app.use(cors())
app.use(express.json())
const port = 5000




app.post('/user', async (req, res) => {
    const { email, password } = req.body;
    
    try {
      const user = await prisma.user.create({
        data: {
          email,
          password
        }
      });
      res.json(user);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: 'Algo deu errado!', details: error.message });
    }
  });

  app.delete('/user', async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email é necessario para deletar um usuario' })
    }

    try{
      const user = await prisma.user.delete({
        where: {
          email: email
        }
      });
      res.json(`${user.email} deletado`);
    } catch (error) {
      console.error("Erro ao deletar usuario:", error)
      res.status(500).json({ error: 'Algo deu errado ao deletar', details: error.message})
    }
  })
  
  


app.get('/', (req, res) => {
    res.status(200).json(users)
})

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
}) 

/*
    Criar uma API de Usuario    

    - Criar um Usuario
    - Listar todos os usuarios
    - Editar um usuario
    - Deleter um usuario

*/