import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Task from "./models/Task";
import cors from "cors";

import { config } from "dotenv";
config();

const PORT = 5000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/tasks", async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req: Request, res: Response) => {
  const newTask = new Task({
    title: req.body.title,
  });
  const createdTask = await newTask.save();
  res.json(createdTask);
});

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
