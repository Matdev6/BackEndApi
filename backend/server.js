import express from "express";
import cors from "cors";
import authMiddleware from "./middlewares/auth.js";

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(cors());    
app.use(express.json()); 
app.use(authMiddleware)

app.get("/", (req, res) => {
  res.send("Hello World");
}); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});