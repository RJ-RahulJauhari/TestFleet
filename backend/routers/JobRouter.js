import express from "express";
import {
    createJob,
    getJobById,
    getAllJobs,
    updateJob,
    deleteJob
} from "../controllers/JobController.js"; // Adjust the path to your controller

const router = express.Router();

// Routes for Job operations
router.post("/", createJob); // Create a new job
router.get("/:job_id", getJobById); // Get job by job_id
router.get("/", getAllJobs); // Get all jobs
router.put("/:job_id", updateJob); // Update job by job_id
router.delete("/:job_id", deleteJob); // Delete job by job_id

export default router;
