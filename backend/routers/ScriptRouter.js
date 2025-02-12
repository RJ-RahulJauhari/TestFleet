import express from "express";
import {
    createScript,
    getAllScripts,
    getScriptById,
    updateScript,
    deleteScript
} from "../controllers/ScriptController.js";

const ScriptRouter = express.Router();

// Routes for script operations
ScriptRouter.post("/", createScript);  // Create a new script
ScriptRouter.get("/", getAllScripts);  // Get all scripts
ScriptRouter.get("/:id", getScriptById);  // Get a script by ID
ScriptRouter.put("/:id", updateScript);  // Update a script by ID
ScriptRouter.delete("/:id", deleteScript);  // Delete a script by ID

export default ScriptRouter;
