import express from "express";
import { getUserCount } from "../Controllers/dashboardController.js";

const router = express.Router();

router.get("/count", getUserCount); // ✅ route is now /api/dashboard/count

export default router;
