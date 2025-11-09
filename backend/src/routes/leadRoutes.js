import express from "express";
import { createLead, getLeads } from "../controllers/leadController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createLead);
router.get("/get", authMiddleware, getLeads);

export default router;
