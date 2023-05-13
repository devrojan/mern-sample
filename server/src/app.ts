import express, { Express, json } from "express";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

main().catch((err) => console.log(err));

app.use(cors());
app.use(json());
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});



async function main() {
  const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xo64lsh.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(url);
}

// const express = require("express"),
//   PORT = 8000,
//   app = express();

// app.get("/api/v1", (req, res) => {
//   res.send("hello !!!!");
// });

// app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
