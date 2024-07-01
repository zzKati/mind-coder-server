// src/index.js
import express, { Express, Request, Response } from "express";
import cors from 'cors'
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin:'*'
}))


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/test",(req,res)=>{
  setTimeout(()=>{
    res.send('success!')
  },5000)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});