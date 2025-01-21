import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
const port = 5000

const users = []

app.post('/usuarios', async (req, res)  => {
    
   const user = await prisma.user.create({
    data : {
        email: req.body.email,
        password : req.body.password
    }
   }
    )

    res.status(201).json(req.body)
})

app.delete('usuarios', async (req, res) => {
    const user =  await prisma.user.delete({
        data : {
            email : req.body.email
        }
    })
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