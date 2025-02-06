import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import authMiddleware from "./middlewares/auth.js"


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(authMiddleware)
app.use(routes); // Usa as rotas sem o prefixo /api


app.listen(port, () => {
  console.log(`App de exemplo está rodando na porta ${port}`);
});
