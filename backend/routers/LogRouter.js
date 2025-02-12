import express from "express";
import {
    createLog,
    getLogById,
    getAllLogs,
    updateLog,
    deleteLog
} from "../controllers/LogController.js"; // Adjust path to your controller

const router = express.Router();

// Routes for Log operations
router.post("/", createLog); // Create a new log entry
router.get("/:log_id", getLogById); // Get a log entry by log_id
router.get("/", getAllLogs); // Get all log entries
router.put("/:log_id", updateLog); // Update a log entry by log_id
router.delete("/:log_id", deleteLog); // Delete a log entry by log_id

export default router;
