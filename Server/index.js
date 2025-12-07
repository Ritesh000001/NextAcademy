import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Database/dbConnect.js";

import { userRoute } from "./Routes/userRoutes.js";
import courseRoutes from "./Routes/courseRoutes.js";
import dashboardRoutes from "./Routes/dashboardRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Mount routes
app.use("/api/users", userRoute);
app.use("/api/courses", courseRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
