import express from "express";
import {
    createDeployment,
    getDeploymentById,
    getAllDeployments,
    updateDeployment,
    deleteDeployment
} from "../controllers/DeploymentController.js"; // Adjust path to your controller

const router = express.Router();

// Routes for Deployment operations
router.post("/", createDeployment); // Create a new deployment
router.get("/:deployment_id", getDeploymentById); // Get a deployment by deployment_id
router.get("/", getAllDeployments); // Get all deployments
router.put("/:deployment_id", updateDeployment); // Update a deployment by deployment_id
router.delete("/:deployment_id", deleteDeployment); // Delete a deployment by deployment_id

export default router;
