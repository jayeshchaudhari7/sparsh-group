import express from 'express'
import contactRoutes from "../routes/routes.js"
import cors from "cors";

const app = express()

app.use(express.json())


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://client-lilac-eta-67.vercel.app",
    ],
  })
);
app.use("/api/contact", contactRoutes);

export default app