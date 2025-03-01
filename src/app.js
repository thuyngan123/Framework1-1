import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb://localhost:27017/Framework1`);

export const viteNodeApp = app;
