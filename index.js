import express from "express";
import { Connection } from "./config/db.js";
import dotenv from "dotenv";
import notesRouter from "./routes/note.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).json("Server is running");
});

app.use('/', notesRouter);

app.listen(process.env.APP_PORT, () => {
  Connection();
  console.log(`Server is running at http://localhost:${process.env.APP_PORT}`);
});
