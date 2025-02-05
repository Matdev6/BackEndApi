import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import authMiddleware from "./middlewares/auth.js"


const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Permite apenas o frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  credentials: true // Permite cookies e cabeçalhos de autenticação
}));

app.use(express.json());
app.use(routes); // Usa as rotas sem o prefixo /api
app.use(authMiddleware)

app.listen(port, () => {
  console.log(`App de exemplo está rodando na porta ${port}`);
});
