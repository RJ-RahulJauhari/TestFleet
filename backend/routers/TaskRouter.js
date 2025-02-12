import express from "express";
import {
    createTask,
    getTaskById,
    getAllTasks,
    updateTask,
    deleteTask
} from "../controllers/TaskController.js"; // Adjust path to your controller

const router = express.Router();

// Routes for Task operations
router.post("/", createTask); // Create a new task
router.get("/:task_id", getTaskById); // Get task by task_id
router.get("/", getAllTasks); // Get all tasks
router.put("/:task_id", updateTask); // Update task by task_id
router.delete("/:task_id", deleteTask); // Delete task by task_id

export default router;
