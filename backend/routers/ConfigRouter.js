import express from "express";
import {
    createConfig,
    getConfigByDeploymentId,
    getAllConfigs,
    updateConfig,
    deleteConfig
} from "../controllers/ConfigController.js"; // Adjust the path to your controller

const router = express.Router();

// Routes for Config operations
router.post("/", createConfig); // Create a new configuration
router.get("/:deployment_id", getConfigByDeploymentId); // Get configuration by deployment_id
router.get("/", getAllConfigs); // Get all configurations
router.put("/:config_id", updateConfig); // Update configuration by config_id
router.delete("/:config_id", deleteConfig); // Delete configuration by config_id

export default router;
