import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import authMiddleware from "./middlewares/auth.js"


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(routes); // Usa as rotas sem o prefixo /api
app.use(authMiddleware)

app.listen(port, () => {
  console.log(`App de exemplo está rodando na porta ${port}`);
});
