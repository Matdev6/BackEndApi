import express from "express";
import cors from "cors";
import authMiddleware from "./middlewares/auth.js";
import routes from "./routes/routes.js"

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(cors());    
app.use(express.json()); 


app.get("/", (req, res) => {
  res.send("Hello World");
}); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;