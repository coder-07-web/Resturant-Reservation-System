import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// ✅ Corrected CORS + typo fix
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Add test route (for quick check)
app.get("/", (req, res) => {
  res.send("Backend is working ✅");
});

app.use("/api/v1/reservation", reservationRouter);

// ✅ DB connection + error middleware
dbConnection();
app.use(errorMiddleware);

export default app;
