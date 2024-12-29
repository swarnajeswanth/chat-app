import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth_route.js";
import messageRoutes from "./routes/message_route.js";
import { connectdb } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT;
const mongodb = process.env.MONGODB_URI;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionSucessStatus: 200,
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectdb();
});
