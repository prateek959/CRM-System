import express from "express";
import { addActivity, getActivities } from "../controllers/activityController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addActivity);
router.get("/get", authMiddleware, getActivities);

export default router;
