import express from "express";
import cors from "cors";
import contactRoutes from "../routes/routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://client-lilac-eta-67.vercel.app",
  "https://client-42gdn09cd-jayeshchaudhari7s-projects.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/contact", contactRoutes);

export default app;